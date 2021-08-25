import {
    Index,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
} from 'typeorm';

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
        length: 255,
        nullable: true,
    })
    public cpf: string;

    @Column({
        name: 'celular',
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    public celular: string;

    @Column({
        name: 'telefone',
        type: 'varchar',
        length: 255,
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
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    public dataNascimento: string;

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
