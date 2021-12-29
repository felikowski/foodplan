import * as express from 'express';
import {Router} from 'express';
import {getManager} from "typeorm";
import {Recipe} from "../entity/Recipe";

const router: Router = express.Router();
router.get('/', async (request, response, next) => {
    const recipeRepository = getManager().getRepository(Recipe);

    const recipes = await recipeRepository.find();

    response.send(recipes);
});
router.get('/:id', async (request, response, next) => {
    const recipeRepository = getManager().getRepository(Recipe);

    const post = await recipeRepository.findOne(request.params.id);

    if (!post) {
        response.status(404);
        response.end();
        return;
    }

    response.send(post);
});
router.delete('/:id', async (request, response, next) => {
    const recipeRepository = getManager().getRepository(Recipe);
    const recipe = await recipeRepository.findOne(request.params.id);

    if (!recipe) {
        response.status(404);
        response.end();
        return;
    }
    recipeRepository.remove(recipe);
    response.status(200);
    response.send(recipe);
});

router.post('/', async (request, response, next) => {
    try {
        const repo = getManager().getRepository(Recipe);
        const insert = await repo.
            createQueryBuilder().
            insert().
            into(Recipe).
            values({
                name: request.body.name,
                imagePath: request.body.imagePath,
                description: request.body.description,
                instructions: request.body.instructions,
                rating: request.body.rating,
            }).
            execute();
        response.status(200);
        response.send();
    } catch (error) {
        response.status(401);
        response.send(error);
    }
});

router.post('/:id', async (request, response, next) => {
    // TODO lookup ob es die Rezept bereits gibt
    try {
        const repo = getManager().getRepository(Recipe);
        const update = await repo.
            createQueryBuilder().
            update().
            set({
                name: request.body.name,
                imagePath: request.body.imagePath,
                description: request.body.description,
                instructions: request.body.instructions,  
                rating: request.body.rating,
            }).
            where("id = :id", { id: request.params.id}).
            execute();
        response.status(200);
        response.send(update);
    } catch (error) {
        response.status(401);
        response.send(error);
    }
});
export {router as RecipeController};