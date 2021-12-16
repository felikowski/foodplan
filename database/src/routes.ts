import {RecipeController} from "./controller/RecipeController";
import {LogController} from "./controller/LogController";
import {Router} from 'express';
interface Route {
    route: String;
    class: Router;
}
export const AppRoutes = [
    {
        route: '/recipe',
        class: RecipeController
    },
    {
        route: '/log',
        class: LogController
    }   
];