require('dotenv').config({
    path: process.env.NODE_ENV ? '.production.env' : '.development.env',
});

module.exports = {
    type: process.env.DATABASE_CONNECTION,
    url: process.env.DATABASE_URL,
    synchronize: process.env.DATABASE_SYNCHRONIZE,
    logging: process.env.DATABASE_LOGGING,
    entities: [process.env.DATABASE_ENTITIES],
    migrations: [process.env.DATABASE_MIGRATIONS],
    subscribers: [process.env.DATABASE_SUBSCRIBERS],
    cli: {
        entitiesDir: process.env.DATABASE_ENTITIES_DIR,
        migrationsDir: process.env.DATABASE_MIGRATIONS_DIR,
        subscribersDir: process.env.DATABASE_SUBSCRIBERS_DIR,
    },
};
