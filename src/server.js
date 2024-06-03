import 'express-async-errors';
import 'dotenv/config';
import './db/connection.js';
import express, { Router, urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { Server } from 'socket.io';
import http from 'http';
import env from './config/env.js';
import baseRoutes from './routes/index.js';
import { ErrorHandler } from './middlewares/errorHandler.js';
import { socketBlock } from './jobs/socketio.js';
import { onboardingTrialCheck } from './jobs/onboard.cronjob.js';
import { createKeys } from './utils/vault.js';

const router = Router();
const rootRouter = baseRoutes(router);

const app = express();

const server = http.createServer(app);


let routePath;
if (env.node_env === 'production') {
  routePath = '/prod/sockets';
} else {
  routePath = '/stag/sockets';
}

let io = new Server(server, {
  cors: { origin: '*', methods: ['GET', 'POST'] }
});

io = io.of(routePath);

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(morgan('combined'));
const port = env.port;

onboardingTrialCheck();

socketBlock({ io });

if (env.node_env === 'production') {
  // routes
  app.use('/api/v1/sponsors', rootRouter);
} else {
  // routes
  app.use('/api/v1/sponsors/stag', rootRouter);
}

app.use('*', (req, res) => {
  res.status(404).send({ message: 'Resource URL not found', success: false, data: null });
});

// Error handlers
app.use(ErrorHandler);

server.listen(port, () => {
  console.log(`🥂server dey function for port ${port}🥂`);
});
