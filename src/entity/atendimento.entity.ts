import {
    Index,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
    OneToOne,
    JoinColumn,
    ManyToOne,
} from 'typeorm';
import { Cliente } from './cliente.entity';
import { Profissional } from './profissional.entity';

@Index('pkey_id_atendimento', ['id'], { unique: true })
@Entity('atendimentos', { schema: 'public' })
export class Atendimento {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column({
        name: 'link_atendimento',
        type: 'varchar',
        length: 600,
        nullable: true,
    })
    public linkAtendimento: string;

    @Column({
        name: 'datetime_ini',
        type: 'timestamp with time zone',
        nullable: true,
    })
    public datetimeIni: Date;

    @Column({
        name: 'datetime_fim',
        type: 'timestamp with time zone',
        nullable: true,
    })
    public datetimeFim: Date;

    @Column({
        name: 'atendimento_inicializado',
        type: 'boolean',
        nullable: true,
    })
    public atendimentoInicializado: boolean;

    @Column({
        name: 'atendimento_cancelado',
        type: 'boolean',
        nullable: true,
    })
    public atendimentoConcel: boolean;

    @Column({
        name: 'atendimento_finalizado',
        type: 'boolean',
        nullable: true,
    })
    public atendimentoFinalizado: boolean;

    @ManyToOne((type) => Profissional, (profissional) => profissional.id)
    @JoinColumn([
        { name: 'fk_id_atendimento_profissional', referencedColumnName: 'id' },
    ])
    profissional: Profissional;

    @ManyToOne((type) => Cliente, (atendimento) => atendimento.atendimentos)
    @JoinColumn([
        { name: 'fk_id_atendimento_cliente', referencedColumnName: 'id' },
    ])
    cliente: Cliente;

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
