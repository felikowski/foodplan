import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToOne, ManyToMany, JoinTable, ManyToOne} from "typeorm";
import { Ingredient } from "./Ingredient";
import {Recipe} from "./Recipe";
import { Unit } from "./Unit";

@Entity()
export class RecipeIngredients {

    @PrimaryColumn()
    ingredientId!: number;

    @PrimaryColumn()
    recipeId!: number;

    @Column()
    unitId!: number;

    @ManyToOne(() => Recipe, recipe => recipe.recipeIngredients)
    recipe: number;

    @ManyToOne(() => Ingredient, ingredient => ingredient.recipeIngredients)
    ingredient: number;

    @ManyToOne(() => Unit, unit => unit.recipeIngredients)
    unit: number;

    @Column()
    amount: number;

    @Column()
    hint: string;

}