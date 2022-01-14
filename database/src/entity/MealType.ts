import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import { Meal } from './Meal';

@Entity()
export class MealType {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    description: string;

  @OneToMany(() => Meal, (meal) => meal.mealType)
    meals: Meal[];
}
