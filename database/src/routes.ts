import { RecipeController } from './controller/RecipeController';
import { IngredientController } from './controller/IngredientController';
import { LogController } from './controller/LogController';

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
