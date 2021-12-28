import {RecipeController} from "./controller/RecipeController";
import {IngredientController} from "./controller/IngredientController";
import {LogController} from "./controller/LogController";
import {Router} from 'express';
interface Route {
    route: String;
    class: Router;
}
export const AppRoutes = [
    {
        route: '/recipe',
        class: RecipeController,
    },
    {
        route: '/log',
        class: LogController,
    },
    {
        route: '/ingredient',
        class: IngredientController,
    },
];