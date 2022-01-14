import {
  Entity, PrimaryGeneratedColumn, Column,
} from 'typeorm';

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    timestamp: Date;

  @Column()
    logLevel: string;

  @Column()
    message: string;

  @Column()
    codeline: string;
}
