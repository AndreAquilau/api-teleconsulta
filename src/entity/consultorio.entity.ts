import {
    Index,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
} from 'typeorm';

@Index('pkey_id_consultorio', ['id'], { unique: true })
@Entity('consultorios', { schema: 'public' })
export class Consultorio {
    @PrimaryGeneratedColumn('increment')
    public id: number;

    @Column({
        name: 'nome',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    public nome: string;

    @Column({
        name: 'cnpj',
        type: 'varchar',
        length: 255,
        nullable: true,
    })
    public cnpj: string;

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
