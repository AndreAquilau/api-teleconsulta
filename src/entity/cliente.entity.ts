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
import { Endereco } from './endereco.entity';
import { Usuario } from './usuario.entity';

@Index('pkey_id_cliente', ['id'], { unique: true })
@Entity('clientes', { schema: 'public' })
export class Cliente {
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
        name: 'celular',
        type: 'varchar',
        length: 20,
        nullable: true,
    })
    public celular: string;

    @Column({
        name: 'telefone',
        type: 'varchar',
        length: 20,
        nullable: true,
    })
    public telefone: string;

    @Column({
        name: 'sexo',
        type: 'char',
        length: 1,
        nullable: true,
    })
    public sexo: string;

    @Column({
        name: 'data_nascimento',
        type: 'date',
        nullable: true,
    })
    public dataNascimento: Date;

    @OneToOne((type) => Endereco, { eager: true })
    @JoinColumn([{ name: 'fk_id_endereco', referencedColumnName: 'id' }])
    public endereco: Endereco;

    @OneToOne((type) => Usuario, { eager: true })
    @JoinColumn([{ name: 'fk_id_usuario', referencedColumnName: 'id' }])
    public usuario: Usuario;

    @OneToMany((type) => Atendimento, (atendimento) => atendimento.cliente, {
        eager: true,
    })
    @JoinColumn([
        { name: 'fk_id_cliente_atendimento', referencedColumnName: 'id' },
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
