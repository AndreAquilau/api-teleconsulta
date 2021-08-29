import { Injectable, Inject, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cliente } from '../entity/cliente.entity';
import { CreateClienteDTO } from './dto/createCliente.dto';
import { ShowClienteDTO } from './dto/showCliente.dto';
import { UpdateClienteDTO } from './dto/updateCliente.dto';

@Injectable()
export class ClienteService {
    public constructor(
        @Inject('CLIENTE_REPOSITORY')
        private clienteRepository: Repository<Cliente>,
    ) {}

    public async findAll(): Promise<ShowClienteDTO[]> {
        try {
            const clientes = await this.clienteRepository.find();

            return clientes;
        } finally {
            Logger.log('Method FindAll', 'ClienteService');
        }
    }

    public async create(
        createClienteDTO: CreateClienteDTO,
    ): Promise<ShowClienteDTO> {
        const createCliente = await this.clienteRepository.create(
            createClienteDTO,
        );
        const cliente = await this.clienteRepository.save(createCliente);

        return cliente;
    }

    public async findById(id: number): Promise<ShowClienteDTO> {
        const cliente = await this.clienteRepository.findOne({ id });

        return cliente;
    }

    public async update(
        id: number,
        updateClienteDTO: UpdateClienteDTO,
    ): Promise<ShowClienteDTO> {
        await this.clienteRepository.update({ id }, updateClienteDTO);

        const cliente = await this.findById(id);

        return cliente;
    }

    public async delete(id: number): Promise<boolean> {
        const deleted = await this.clienteRepository.delete({ id });

        if (deleted.raw) {
            return true;
        } else {
            return false;
        }
    }
}
