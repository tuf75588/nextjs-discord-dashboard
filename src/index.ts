import express from 'express';
import { config } from './config';
import authRouterWithDiscord from './routes';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
const { secret }: any = config;
const app = express();
require('./strategies/discord');
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);
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

// Enable Passport
app.use(passport.initialize());
app.use(passport.session());

let port: any = config.PORT;

async function main() {
  try {
    // run the app
    app.use('/api', authRouterWithDiscord);
    const server: any = app.listen(port, () => {
      console.log('server listening http://localhost:' + server.address().port);
    });
  } catch (error) {
    // uh oh
  }
}

main();
