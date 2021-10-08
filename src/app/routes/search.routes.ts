import { Router } from 'express';

import SearchController from '../controllers/SearchController';

// Rotas para o 'search' da api
const searchRoutes = Router();

// Instanciando o controlador das requisições
const searchController = new SearchController();

// Listagem dos produtos
searchRoutes.get('/', searchController.get);

export default searchRoutes;
