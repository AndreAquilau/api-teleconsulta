require('dotenv').config({
    path: process.env.NODE_ENV ? '.production.env' : '.development.env',
});

module.exports = {
    type: process.env.DATABASE_CONNECTION,
    url: process.env.DATABASE_URL,
    synchronize: process.env.DATABASE_SYNCHRONIZE,
    logging: process.env.DATABASE_LOGGING,
    entities: ['./src/' + process.env.DATABASE_ENTITIES],
    migrations: ['./src/' + process.env.DATABASE_MIGRATIONS],
    subscribers: ['./src/' + process.env.DATABASE_SUBSCRIBERS],
    cli: {
        entitiesDir: './src/' + process.env.DATABASE_ENTITIES_DIR,
        migrationsDir: './src/' + process.env.DATABASE_MIGRATIONS_DIR,
        subscribersDir: './src/' + process.env.DATABASE_SUBSCRIBERS_DIR,
    },
};
