import { Request, Response } from 'express';
import SearchService from '../services/SearchService';

class SearchController {
    // Método para executar o serviço do 'search'
    public async get(request: Request, response: Response): Promise<Response> {
        // Recuperando o parâmetro de pesquisa
        const { search } = request.params;

        // Instanciando e executando o serviço para realizar o 'search'
        const searchService = new SearchService(); 

        const searchResponse = await searchService.execute(search);

        // Retornando a responta
        return response.json('Temp');
    }
}

export default SearchController;
