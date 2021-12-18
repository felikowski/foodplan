import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import { MealStatus } from "./MealStatus";
import { MealType } from "./MealType";
import { Plan } from "./Plan";
import { Recipe } from "./Recipe";

@Entity()
export class Meal {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Plan, plan => plan.meals)
    plan: Date;

    @Column()
    date: Date;

    @ManyToOne(() => Recipe, recipe => recipe.meals)
    recipe: number;

    @ManyToOne(() => MealType, mealType => mealType.id)
    mealType: number;

    @ManyToOne(() => MealStatus, mealStatus => mealStatus.id)
    mealStatus: number;

    @Column()
    remark: String;
}