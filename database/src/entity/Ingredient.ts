import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import { RecipeIngredients } from './RecipeIngredients';

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    description: string;

  @Column()
    usualDurability: number; // days

  @Column()
    standardUnitId: number;

  @Column()
    imagePath: string;

  @OneToMany(() => RecipeIngredients, (recipeIngredients) => recipeIngredients.ingredient)
    recipeIngredients!: RecipeIngredients[];
}
