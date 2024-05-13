import mongoose from 'mongoose';
import env from '../config/env.js';

let url = env.live_uri;

mongoose.set('strictQuery', false);
mongoose
  .connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    { autoIndex: false }
  )
  .then(() => {
    console.log('database dey very functional🔥');
  })
  .catch((e) => {
    console.log('Database Crash😭', e);
  });

let dbURL = env.db_uri;

const secondDb = mongoose.createConnection(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

secondDb.on('open', () => {
  console.log('Second connection opened successfully🔥');
});

export { secondDb };
