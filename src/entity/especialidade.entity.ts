import {
    Index,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
} from 'typeorm';

@Index('pkey_id_especialidade', ['id'], { unique: true })
@Entity('especialidades', { schema: 'public' })
export class Especialidade {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column({
        name: 'nome',
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    public nome: string;

    @Column({
        name: 'descricao',
        type: 'text',
        nullable: true,
    })
    public descricao: string;

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
