import express from 'express';
import { config } from './config';
import router from './routes';
const app = express();

let port: any = config.PORT;

async function main() {
  try {
    // run the app
    app.use(router);
    const server: any = app.listen(port, () => {
      console.log('server listening http://localhost:' + server.address().port);
    });
  } catch (error) {
    // uh oh
  }
}

main();
