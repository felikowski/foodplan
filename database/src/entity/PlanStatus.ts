import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne, OneToMany} from "typeorm";
import { Plan } from "./Plan";

@Entity()
export class PlanStatus {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    description: String;

    @OneToMany(() => Plan, plan => plan.planStatus)
    plans: Plan[]; 
}