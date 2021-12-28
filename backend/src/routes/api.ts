import express from 'express';
import { Recipe } from '../lib/Recipe';
import { Log }from '../lib/Log';

const router = express.Router();
router.use((req, res, next) => {
  Log.getLog().silly(req.url);
  next();
});

router.get('/', (req, res) => {
  res.send('Future API Doc will be found here');
});

router.get('/recipes', async (req, res) => {
  const response: String = await Recipe.getAllRecipes();
  res.setHeader('content-type', 'application/json')
  res.send(response);
})

router.get('/recipes/:id', async (req, res) => {
  const response: String = await Recipe.getSingleRecipe(+req.params.id);
  res.setHeader('content-type', 'application/json');
  res.send(response);
});

router.delete('/recipes/:id', async (req, res) => {
  const response: String = await Recipe.deleteSingleRecipe(+req.params.id);
  res.setHeader('content-type', 'application/json');
  res.send(response);
});

router.post('/recipes/', async (req, res) => {
  const response: String = await Recipe.insertRecipe(req.body);
  res.setHeader('content-type', 'application/json');
  res.send(response);
});

router.post('/recipes/:id', async (req, res) => {
  const response: String = await Recipe.updateRecipe(+req.params.id, req.body);
  res.setHeader('content-type', 'application/json');
  res.send(response);
});

module.exports = router;