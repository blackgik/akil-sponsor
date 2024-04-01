import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';

import { connectToDatabase } from './database/db.config';
//import { roleRoute } from './routes/role.route';
//import { userRoute } from './routes/user.route';
import { apiDocumentation } from './docs/apidocs';
import { rateLimiterMiddleware } from './middleware/rate-limiter-middleware';

dotenv.config();

const HOST = process.env.HOST || 'http://localhost';
const PORT = parseInt(process.env.PORT || '4500');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ratelimiter middleware activation
app.use(rateLimiterMiddleware);

//app.use('/', roleRoute());
//app.use('/', userRoute());
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(apiDocumentation));

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World!' });
});

app.listen(PORT, async () => {
  await connectToDatabase();

  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
});
