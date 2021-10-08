// Configurações do Redis para o controle da fila dos emails
export default {
    host: process.env.REDIS_HOST || '',
    port: Number(process.env.REDIS_PORT),
};
