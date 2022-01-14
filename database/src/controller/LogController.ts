import * as express from 'express';
import { Router } from 'express';
import { getManager } from 'typeorm';
import { Log } from '../entity/Log';

const router: Router = express.Router();

router.post('/', async (request, response) => {
  try {
    const repo = getManager().getRepository(Log);
    await repo
      .createQueryBuilder()
      .insert()
      .into(Log)
      .values({
        timestamp: request.body.timestamp,
        logLevel: request.body.logLevel,
        message: request.body.message,
        codeline: request.body.codeline,
      })
      .execute();
    response.status(200);
    response.send();
  } catch (error) {
    response.status(401);
    response.send(error);
  }
});

export { router as LogController };
