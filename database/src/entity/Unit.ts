import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { RecipeIngredients } from "./RecipeIngredients";

@Entity()
export class Unit {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    unit: string;

    @OneToMany(() => RecipeIngredients, recipeIngredients => recipeIngredients.unit)
    recipeIngredients!: RecipeIngredients[];

}