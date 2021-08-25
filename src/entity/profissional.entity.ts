import {
    Index,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
} from 'typeorm';

@Index('pkey_id_profissional', ['id'], { unique: true })
@Entity('profissionais', { schema: 'public' })
export class Profissional {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column({
        name: 'nome_completo',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    public nome_completo: string;

    @Column({
        name: 'cpf',
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    public cpf: string;

    @Column({
        name: 'sobre',
        type: 'text',
        nullable: true,
    })
    public sobre: string;

    @Column({
        name: 'numero_conselho',
        type: 'integer',
        nullable: true,
    })
    public numeroConselho: number;

    @Column({
        name: 'duracao_atendimento',
        type: 'time without time zone',
        nullable: true,
    })
    public duracaoAtendimento: string;

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
