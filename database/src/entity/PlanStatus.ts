import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import { Plan } from './Plan';

@Entity()
export class PlanStatus {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    description: string;

  @OneToMany(() => Plan, (plan) => plan.planStatus)
    plans: Plan[];
}
