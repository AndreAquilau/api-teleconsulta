import {
    Index,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
} from 'typeorm';

@Index('pkey_id_horario_atendimento', ['id'], { unique: true })
@Entity('horarioAtendimentos', { schema: 'public' })
export class HorarioAtendimento {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column({
        name: 'dia',
        type: 'integer',
        nullable: true,
    })
    public dia: number;

    @Column({
        name: 'horario_ini',
        type: 'time without time zone',
        nullable: true,
    })
    public horarioIni: string;

    @Column({
        name: 'horario_fim',
        type: 'time without time zone',
        nullable: true,
    })
    public horarioFim: string;

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
