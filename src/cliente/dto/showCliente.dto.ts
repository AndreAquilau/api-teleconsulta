import { ClienteDTO } from './cliente.dto';

export class ShowClienteDTO extends ClienteDTO {
    public readonly id: number;

    public readonly createdAt: Date;

    public readonly updatedAt: Date;
}
