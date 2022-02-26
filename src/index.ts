import express from 'express';
import { config } from './config';

console.log(config);

const app = express();

let port: any = config.PORT;

async function main() {
  try {
    // run the app
  } catch (error) {
    // uh oh
  }
}

const server: any = app.listen(port, () => {
  console.log('server listening http://localhost:' + server.address().port);
});
