export default () =>({
    port: parseInt(process.env.DB_PORT || '5432', 10),
    database: {
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '5432', 10),
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || '',
        name: process.env.DB_NAME || 'mydb',
        logging: process.env.DB_LOGGING === 'true',
        synchronize: process.env.DB_SYNCHRONIZE === 'true',
    },
    
    jwt: {
    secret: process.env.JWT_SECRET || 'defaultSecret',
    expiresIn: process.env.JWT_EXPIRES_IN || '1d',
    },

    redis: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT || '6379', 10),
        ttl: parseInt(process.env.REDIS_TTL || '300', 10), // 5 minutes
    },
})