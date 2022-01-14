import * as express from 'express';
import { Router } from 'express';
import { getManager } from 'typeorm';
import { Ingredient } from '../entity/Ingredient';

const router: Router = express.Router();
router.get('/', async (request, response) => {
  const ingredientRepository = getManager().getRepository(Ingredient);
  const recipes = await ingredientRepository.find();
  response.send(recipes);
});
router.get('/:id', async (request, response) => {
  const ingredientRepository = getManager().getRepository(Ingredient);
  const post = await ingredientRepository.findOne(request.params.id);

  if (!post) {
    response.status(404);
    response.end();
    return;
  }
  response.send(post);
});
router.delete('/:id', async (request, response) => {
  const ingredientRepository = getManager().getRepository(Ingredient);
  const recipe = await ingredientRepository.findOne(request.params.id);

  if (!recipe) {
    response.status(404);
    response.end();
    return;
  }
  ingredientRepository.remove(recipe);
  response.status(200);
  response.send(recipe);
});

router.post('/', async (request, response) => {
  try {
    const repo = getManager().getRepository(Ingredient);
    const insert = await repo
      .createQueryBuilder()
      .insert()
      .into(Ingredient)
      .values({
        name: request.body.name,
        description: request.body.description,
        standardUnitId: request.body.standardUnitId,
        imagePath: request.body.imagePath,
        usualDurability: request.body.usualDurability,
      })
      .execute();
    response.status(200);
    response.send(insert.raw);
  } catch (error) {
    response.status(401);
    response.send(error);
  }
});

router.post('/:id', async (request, response) => {
  // TODO lookup ob es die Zutat bereits gibt
  try {
    const repo = getManager().getRepository(Ingredient);
    const update = await repo
      .createQueryBuilder()
      .update()
      .set({
        name: request.body.name,
        description: request.body.description,
        standardUnitId: request.body.standardUnitId,
        imagePath: request.body.imagePath,
        usualDurability: request.body.usualDurability,
      })
      .where('id = :id', { id: request.params.id })
      .execute();
    response.status(200);
    response.send(update);
  } catch (error) {
    response.status(401);
    response.send(error);
  }
});
export { router as IngredientController };
