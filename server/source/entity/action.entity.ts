import { Entity, PrimaryGeneratedColumn, Index, Column } from 'typeorm';

@Entity()
export class Action {
    @PrimaryGeneratedColumn({unsigned: true})
    id: number;

    @Column({type: 'number'})
    @Index({unique: true})
    tid: number;

    @Column({type: 'number'})
    wid: number;

    @Column({type: 'number'})
    pid: number;

    @Column({type: 'number'})
    aid: number;

    @Column({type: 'date'})
    date: Date

    @Column({type: 'varchar', length: 5, default: null, nullable: true})
    status: string;
}
