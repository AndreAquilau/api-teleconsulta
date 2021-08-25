import {
    Index,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
} from 'typeorm';

@Index('pkey_id_usuario', ['id'], { unique: true })
@Entity('usuarios', { schema: 'public' })
export class Usuario {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        name: 'nome_completo',
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    nome: string;

    @Column({
        name: 'senha_hash',
        type: 'text',
        nullable: false,
    })
    private _senhaHash: string;

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

    public get senha(): string {
        return this._senhaHash;
    }

    public set senha(value: string) {
        this._senhaHash = value;
    }
}
