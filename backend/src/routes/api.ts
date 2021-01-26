import express from 'express';
import dbWrapper from '../lib/dbWrapper';

const router = express.Router();
router.get('/', (req, res) => {
  res.send('api works');
});
router.get('/recipes', async (req, res) => {
  console.log(req.url);
  const db = new dbWrapper();
  const response : String = await db.getAllRecipes();
  res.setHeader('content-type', 'application/json')
  res.send(response);
})

router.get('/recipes/:id', async (req, res) => {
  console.log(req.url);
  const db = new dbWrapper();
  const response : String = await db.getSingleRecipe(+req.params.id);
  res.setHeader('content-type', 'application/json');
  res.send(response);
})

module.exports = router;