import {
    Index,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
} from 'typeorm';

@Index('pkey_id_endereco', ['id'], { unique: true })
@Entity('enderecos', { schema: 'public' })
export class Endereco {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column({
        name: 'cep',
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    public cep: string;

    @Column({
        name: 'rua',
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    public rua: string;

    @Column({
        name: 'numero',
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    public numero: string;

    @Column({
        name: 'complemento',
        type: 'text',
        nullable: true,
    })
    public complemento: string;

    @Column({
        name: 'bairro',
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    public bairro: string;

    @Column({
        name: 'cidade',
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    public cidade: string;

    @Column({
        name: 'estado',
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    public estado: string;

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
