import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import { Meal } from './Meal';
import { RecipeIngredients } from './RecipeIngredients';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    imagePath: string;

  @Column()
    description: string;

  @Column()
    instructions: string;

  @Column()
    rating: number;

  @OneToMany(() => RecipeIngredients, (recipeIngredients) => recipeIngredients.recipe)
    recipeIngredients!: RecipeIngredients[];

  @OneToMany(() => Meal, (meal) => meal.plan)
    meals: Meal[];
}
