import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cliente } from '../entity/cliente.entity';

@Injectable()
export class ClienteService {
    constructor(
        @Inject('CLIENTE_REPOSITORY')
        private clienteRepository: Repository<Cliente>,
    ) {}

    async findAll(): Promise<Cliente[]> {
        return this.clienteRepository.find();
    }
}
