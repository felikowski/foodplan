import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import bodyParser from 'body-parser';
import { AppRoutes } from './routes';

createConnection()
  .then(async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    const port = 4000;
    express.Router();

    AppRoutes.forEach((r) => {
      app.use(r.route, r.class);
    });

    app.listen(port, () => console.log(`server is listening on ${port}`));
  })
  .catch((error) => console.log(error));
