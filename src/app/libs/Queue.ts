import Queue from 'bull';

import jobs from '../jobs';
import redisConfig from '../../config/redis';

// Criando a fila de todos os jobs que forem adicionados
const queues = Object.values(jobs).map(job => ({
    bull: new Queue(job.key, { redis: redisConfig }),
    name: job.key,
    handle: job.handle,
}));

export default {
    // Filas cadastradas
    queues,
    // Método para adicionar dados em uma das filas cadastradas
    add(name: string, data: object) {
        // Buscando a fila que deseja executar
        const queue = this.queues.find(q => q.name === name);

        // Caso não encontre a fila, não executa nada
        if(!queue) {
            return;
        }

        // Adicionando os dados na fila
        return queue.bull.add(data);
    },
    // Método para processamento das filas
    process() {
        return this.queues.forEach(queue => {
            // Executando o método da fila
            queue.bull.process(queue.handle)

            // Tratando erros da fila
            queue.bull.on('failed', (job, error) => {
                console.log('Job failed', queue.name, job.data);
                console.log(error);
            });
        });
    },
};
