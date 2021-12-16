import * as express from 'express';
import {Router} from 'express';
import {getManager} from "typeorm";
import {Recipe} from "../entity/Recipe";

const router: Router = express.Router();
router.get('/', async (request, response, next) => {
    console.log('request for all recipes came in!');
    const postRepository = getManager().getRepository(Recipe);

    const recipes = await postRepository.find();

    response.send(recipes);
});
router.get('/:id', async (request, response, next) => {
    console.log(`request for recipe with id ${request.params.id} came in`);
    const postRepository = getManager().getRepository(Recipe);

    const post = await postRepository.findOne(request.params.id);

    if (!post) {
        response.status(404);
        response.end();
        return;
    }

    response.send(post);
});

export {router as RecipeController};