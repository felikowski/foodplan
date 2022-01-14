import { Recipe } from '../types/recipe';
import { RecipeRaw } from '../types/recipe-raw';

export class RecipeFactory {
  static fromRaw(recipe: RecipeRaw): Recipe {
    return {
      ...recipe,
    };
  }
}
