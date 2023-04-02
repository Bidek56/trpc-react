import { Entity, PrimaryGeneratedColumn, Index, Column } from 'typeorm';

@Entity('time')
export class Time {
    @PrimaryGeneratedColumn({unsigned: true})
    id: number;

    @Column({type: 'int'})
    uv: number;

    @Column({type: 'int'})
    pv: number;

    @Column({type: 'int'})
    amt: number;

    @Column({type: 'date'})
    @Index({unique: true})
    date: Date

    @Column({type: 'varchar', length: 15, default: null, nullable: true})
    @Index({unique: true})
    name: string;
}