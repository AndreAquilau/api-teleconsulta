import { Injectable, Inject, Logger } from '@nestjs/common';
import { from, Observable } from 'rxjs';
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
            return this.clienteRepository.find();
        } finally {
            Logger.log('Method FindAll', 'ClienteService');
        }
    }
}
