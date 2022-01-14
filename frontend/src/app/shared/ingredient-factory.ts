import { Ingredient } from '../types/Ingredient';
import { IngredientRaw } from '../types/IngredientRaw';

export class IngredientFactory {
  static fromRaw(ingredient: IngredientRaw): Ingredient {
    return {
      ...ingredient,
      standardUnit: ingredient.standardUnitId,
    };
  }
}
