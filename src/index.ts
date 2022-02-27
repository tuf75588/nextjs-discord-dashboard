import express from 'express';
import { config } from './config';
import router from './routes';
import cors from 'cors';
import session from 'express-session';

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);

const { secret }: any = config;
app.use(
  session({
    secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000 * 60 * 24 * 7,
    },
  })
);

let port: any = config.PORT;

async function main() {
  try {
    // run the app
    app.use('/api', router);
    const server: any = app.listen(port, () => {
      console.log('server listening http://localhost:' + server.address().port);
    });
  } catch (error) {
    // uh oh
  }
}

main();
