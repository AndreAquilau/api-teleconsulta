import { Atendimento } from 'src/entity/atendimento.entity';
import { Endereco } from 'src/entity/endereco.entity';
import { Usuario } from 'src/entity/usuario.entity';

export class ClienteDTO {
    public nomeCompleto: string;

    public cpf?: string;

    public celular?: string;

    public telefone?: string;

    public sexo?: string;

    public dataNascimento?: Date;

    public endereco?: Endereco;

    public usuario?: Usuario;

    public atendimentos?: Atendimento[];
}
