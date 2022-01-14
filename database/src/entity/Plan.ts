import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne,
} from 'typeorm';
import { Meal } from './Meal';
import { PlanStatus } from './PlanStatus';

@Entity()
export class Plan {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    from: Date;

  @Column()
    to: Date;

  @ManyToOne(() => PlanStatus, (planStatus) => planStatus.id)
    planStatus: number;

  @Column()
    remark: string;

  @OneToMany(() => Meal, (meal) => meal.plan)
    meals: Meal[];
}
