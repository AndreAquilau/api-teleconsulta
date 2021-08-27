import { Injectable, Inject, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { Cliente } from '../entity/cliente.entity';

@Injectable()
export class ClienteService {
    constructor(
        @Inject('CLIENTE_REPOSITORY')
        private clienteRepository: Repository<Cliente>,
    ) {}

    public async findAll(): Promise<Cliente[]> {
        try {
            const clientes = await this.clienteRepository.find();
            console.log(clientes);
            return clientes;
        } finally {
            Logger.log('get cleintes');
        }
    }
}
