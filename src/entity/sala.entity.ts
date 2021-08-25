import { NotImplementedException } from '@nestjs/common';
import {
    Index,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
} from 'typeorm';

@Index('pkey_id_sala', ['id'], { unique: true })
@Entity('salas', { schema: 'public' })
export class Sala {
    public constructor() {
        throw new NotImplementedException();
    }

    @PrimaryGeneratedColumn('increment')
    public id: number;

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
