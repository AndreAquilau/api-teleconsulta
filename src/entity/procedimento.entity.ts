import { NotAcceptableException } from '@nestjs/common';
import {
    Index,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    OneToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';

@Index('pkey_id_procedimento', ['id'], { unique: true })
@Entity('procedimentos', { schema: 'public' })
export class Procedimento {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    public constructor() {
        //throw new NotAcceptableException();
    }

    @CreateDateColumn({
        name: 'created_At',
        type: 'timestamp',
        default: 'now()',
    })
    public readonly created_At: Date;

    @UpdateDateColumn({
        name: 'updated_At',
        type: 'timestamp',
        default: 'now()',
    })
    public readonly upated_date: Date;
}
