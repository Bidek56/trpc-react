import { Entity, PrimaryGeneratedColumn, Index, Column } from 'typeorm';

@Entity()
export class Action {
    @PrimaryGeneratedColumn({unsigned: true})
    id: number;

    @Column({type: 'int'})
    @Index({unique: true})
    tid: number;

    @Column({type: 'int'})
    wid: number;

    @Column({type: 'int'})
    pid: number;

    @Column({type: 'int'})
    aid: number;

    @Column({type: 'date'})
    date: Date

    @Column({type: 'varchar', length: 5, default: null, nullable: true})
    status: string;
}
