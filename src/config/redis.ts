// Configurações do Redis para o controle da fila dos emails
export default {
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: Number(process.env.REDIS_PORT) || 6379,
};
