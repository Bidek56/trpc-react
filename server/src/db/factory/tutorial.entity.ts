import { Entity, PrimaryGeneratedColumn, Index, Column, BaseEntity } from 'typeorm';

import { tutorialStatus } from '../../../../lib/index'

@Entity('tutorial')
export class Tutorial extends BaseEntity {
    @PrimaryGeneratedColumn({unsigned: true})
    id: number;

    @Column({type: 'varchar', length: 24, default: null, nullable: true})
    @Index({unique: true})
    youtubeUrl: string;

    @Column({type: 'varchar', length: 24, default: null, nullable: true})
    @Index({unique: true})
    title: string;

    @Column({type: 'int'})
    progress: number;

    @Column({type: 'varchar', length: 5, default: null, nullable: true})
    status: tutorialStatus;
}
