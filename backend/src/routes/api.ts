import express from 'express';
import { dbWrapper } from '../lib/dbWrapper';
import { ILogObject, Logger } from 'tslog';

function logToDb(logObject: ILogObject) {
  console.log(logObject.date, logObject.logLevel);
  console.log(JSON.stringify(logObject));
  dbWrapper.sendToLog(logObject);
}
const log: Logger = new Logger({ name: "logger" });
log.attachTransport({
  silly: logToDb,
  debug: logToDb,
  trace: logToDb,
  info: logToDb,
  warn: logToDb,
  error: logToDb,
  fatal: logToDb
});
const router = express.Router();
router.get('/', (req, res) => {
  res.send('api works');
});
router.get('/recipes', async (req, res) => {
  console.log(req.url);
  log.silly(req.url);
  const response: String = await dbWrapper.getAllRecipes();
  res.setHeader('content-type', 'application/json')
  res.send(response);
})

router.get('/recipes/:id', async (req, res) => {
  const log: Logger = new Logger({ name: "logger" });
  log.silly(req.url);
  const response: String = await dbWrapper.getSingleRecipe(+req.params.id);
  res.setHeader('content-type', 'application/json');
  res.send(response);
})

module.exports = router;