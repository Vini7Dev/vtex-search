import 'dotenv/config';
import express from 'express';
import { createBullBoard } from 'bull-board';
import { BullAdapter } from 'bull-board/bullAdapter';
import { BullMQAdapter } from 'bull-board/bullMQAdapter';

import Queue from './app/libs/Queue';
import mainRoutes from './app/routes';

// Criando o servidor
const app = express();

// Definindo o uso do JSON no servidor
app.use(express.json());

// Aplicando as rotas no servidor
app.use(mainRoutes);

// Configurando o bull board para as queues
const { router: queuesRouter } = createBullBoard(
    Queue.queues.map(queue => new BullAdapter(queue.bull)),
);

// Declarando a rota para acessar o bull board
app.use('/admin/queues', queuesRouter);

// Iniciando o servidor
app.listen(3333, () => {
    console.log('===> Server started on port 3333 <===')
});
