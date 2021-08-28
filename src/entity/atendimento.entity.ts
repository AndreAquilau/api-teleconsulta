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

enum SituacaoAtendimento {
    PENDENTE = 'Pendente',
    CANCELADO = 'Cancelado',
    ATENDIDO = 'Atendido',
}

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
        name: 'data_agendamento',
        type: 'timestamp',
        nullable: true,
    })
    public dataAgendamento: Date;

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
        name: 'atendimento_situacao',
        type: 'enum',
        nullable: true,
        enum: SituacaoAtendimento,
        default: SituacaoAtendimento.PENDENTE,
    })
    public atendimentoInicializado: boolean;

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
