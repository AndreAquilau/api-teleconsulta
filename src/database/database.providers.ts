import { createConnection } from 'typeorm';
import { resolve } from 'path';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => {
            return await createConnection({
                type: (process.env.DATABASE_TYPE as any) || 'postgres',
                url: process.env.DATABASE_URL,
                database: process.env.DATABASE_NAME,
                entities: [
                    resolve(__dirname, '..', process.env.DATABASE_ENTITIES),
                ],
                migrations: [
                    resolve(__dirname, '..', process.env.DATABASE_MIGRATIONS),
                ],
                subscribers: [
                    resolve(__dirname, '..', process.env.DATABASE_SUBSCRIBERS),
                ],
                synchronize: false,
                logging: false,
            });
        },
    },
];
