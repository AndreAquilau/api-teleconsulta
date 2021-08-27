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
import { Atendimento } from './atendimento.entity';
import { Cliente } from './cliente.entity';
import { ConselhoRegional } from './conselhoRegional.entity';
import { Endereco } from './endereco.entity';
import { Especialidade } from './especialidade.entity';
import { HorarioAtendimento } from './horarioAtendimento.entity';
import { UFConselho } from './ufConselho.entity';
import { Usuario } from './usuario.entity';

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
        length: 20,
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

    @OneToOne((type) => Endereco, (endereco) => endereco.id, { eager: true })
    @JoinColumn([{ name: 'fk_id_endereco', referencedColumnName: 'id' }])
    public endereco: Endereco;

    @OneToOne((type) => Usuario, (usuario) => usuario.id, { eager: true })
    @JoinColumn([{ name: 'fk_id_usuario', referencedColumnName: 'id' }])
    public usuario: Usuario;

    @OneToOne((type) => Especialidade, (especialidade) => especialidade.id, {
        eager: true,
    })
    @JoinColumn([{ name: 'fk_id_especialidade', referencedColumnName: 'id' }])
    public especialidade: Especialidade;

    @OneToOne((type) => ConselhoRegional, { eager: true })
    @JoinColumn([
        { name: 'fk_id_conselho_regional', referencedColumnName: 'id' },
    ])
    public consolheRegional: ConselhoRegional;

    @OneToOne((type) => UFConselho, {
        eager: true,
    })
    @JoinColumn([{ name: 'fk_id_uf_conselho', referencedColumnName: 'id' }])
    public ufConselho: UFConselho;

    @OneToMany(
        (type) => HorarioAtendimento,
        (horarioAtendimento) => horarioAtendimento.profissional,
        { eager: true },
    )
    @JoinColumn([
        { name: 'fk_id_horario_atendimento', referencedColumnName: 'id' },
    ])
    horariosAtendimentos: HorarioAtendimento[];

    @OneToMany(
        (type) => Atendimento,
        (atendimento) => atendimento.profissional,
        {
            eager: true,
        },
    )
    @JoinColumn([
        { name: 'fk_id_profissional_atendimento', referencedColumnName: 'id' },
    ])
    atendimentos: Atendimento[];

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
