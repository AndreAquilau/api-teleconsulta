import { Logger } from '@nestjs/common';
import { Connection } from 'typeorm';
import { Cliente } from '../entity/cliente.entity';

export const clienteProviders = [
    {
        provide: 'CLIENTE_REPOSITORY',
        useFactory: (connection: Connection) => {
            try {
                return connection.getRepository(Cliente);
            } finally {
                Logger.log('Loading Cliente Repository', 'ClienteProviders');
            }
        },
        inject: ['DATABASE_CONNECTION'],
    },
];
