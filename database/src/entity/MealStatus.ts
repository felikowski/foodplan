import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne, OneToMany} from "typeorm";
import { Meal } from "./Meal";
import { Plan } from "./Plan";

@Entity()
export class MealStatus {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    description: String;

    @OneToMany(() => Meal, meal => meal.mealStatus)
    meals: Meal[]; 
}