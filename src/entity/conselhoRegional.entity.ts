import {
    Index,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
} from 'typeorm';

@Index('pkey_id_conselho_regional', ['id'], { unique: true })
@Entity('conselho_regionais', { schema: 'public' })
export class ConselhoRegional {
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
        name: 'codigo',
        type: 'integer',
        nullable: true,
    })
    public codigo: number;

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
