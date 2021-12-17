import express from 'express';
import { dbWrapper } from '../lib/dbWrapper';
import { Log }from '../lib/Log';

const router = express.Router();
router.use((req, res, next) => {
  Log.getLog().silly(req.url);
  next();
});
router.get('/', (req, res) => {
  res.send('api works');
});
router.get('/recipes', async (req, res) => {
  const response: String = await dbWrapper.getAllRecipes();
  res.setHeader('content-type', 'application/json')
  res.send(response);
})

router.get('/recipes/:id', async (req, res) => {
  const response: String = await dbWrapper.getSingleRecipe(+req.params.id);
  res.setHeader('content-type', 'application/json');
  res.send(response);
})

module.exports = router;