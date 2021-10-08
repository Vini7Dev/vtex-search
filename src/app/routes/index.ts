import { Router } from 'express';

import searchRoutes from './search.routes';

// Todas as rotas do servidor
const mainRoutes = Router();

// Adicionando a rota de 'search'
mainRoutes.use('/search', searchRoutes);

export default mainRoutes;
