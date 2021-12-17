import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
@Entity()
export class Log {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    timestamp: Date;

    @Column()
    logLevel: String;

    @Column()
    message: String;

    @Column()
    codeline: String;
}