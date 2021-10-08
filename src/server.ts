import 'dotenv/config';
import express from 'express';

import mainRoutes from './app/routes';

// Criando o servidor
const app = express();

// Definindo o uso do JSON no servidor
app.use(express.json());

// Aplicando as rotas no servidor
app.use(mainRoutes);

// Iniciando o servidor
app.listen(3333, () => {
    console.log('===> Server started on port 3333 <===')
});
