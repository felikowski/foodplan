import express from 'express';
import Recipe from '../lib/recipe';
import Log from '../lib/Log';
import { Ingredient } from '../lib/Ingredient';

const router = express.Router();
router.use((req, res, next) => {
  Log.getLog().silly(req.url);
  next();
});

router.get('/', (req, res) => {
  res.send('Future API Doc will be found here');
});

router.get('/recipes', async (req, res) => {
  const response: string = await Recipe.getAllRecipes();
  res.setHeader('content-type', 'application/json');
  res.send(response);
});

router.get('/recipes/:id', async (req, res) => {
  const response: string = await Recipe.getSingleRecipe(+req.params.id);
  res.setHeader('content-type', 'application/json');
  res.send(response);
});

router.delete('/recipes/:id', async (req, res) => {
  const response: string = await Recipe.deleteSingleRecipe(+req.params.id);
  res.setHeader('content-type', 'application/json');
  res.send(response);
});

router.post('/recipes/', async (req, res) => {
  const response: string = await Recipe.insertRecipe(req.body);
  res.setHeader('content-type', 'application/json');
  res.send(response);
});

router.post('/recipes/:id', async (req, res) => {
  const response: string = await Recipe.updateRecipe(+req.params.id, req.body);
  res.setHeader('content-type', 'application/json');
  res.send(response);
});

router.get('/ingredients', async (req, res) => {
  const response: string = await Ingredient.getAllIngredients();
  res.setHeader('content-type', 'application/json');
  res.send(response);
});

router.get('/ingredients/:id', async (req, res) => {
  const response: string = await Ingredient.getSingleIngredient(+req.params.id);
  res.setHeader('content-type', 'application/json');
  res.send(response);
});

router.delete('/ingredients/:id', async (req, res) => {
  const response: string = await Ingredient.deleteSingleIngredient(+req.params.id);
  res.setHeader('content-type', 'application/json');
  res.send(response);
});

router.post('/ingredients', async (req, res) => {
  const response: string = await Ingredient.insertIngredient(req.body);
  res.setHeader('content-type', 'application/json');
  res.send(response);
});

router.post('/ingredients/:id', async (req, res) => {
  const response: string = await Ingredient.updateIngredient(+req.params.id, req.body);
  res.setHeader('content-type', 'application/json');
  res.send(response);
});

export default router;
