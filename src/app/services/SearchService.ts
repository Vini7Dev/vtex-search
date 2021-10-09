import api from '../api';
import Queue from '../libs/Queue';
import getProductData from '../utils/getProductData';
import ISearchResponseDTO from '../dtos/ISearchResponseDTO';

interface IRequest {
    name: string;
    email: string;
    search: string;
}

// Serviço para executar o search
class SearchService {
    public async execute({
        name,
        email,
        search = '',
    }: IRequest): Promise<void> {
        // Recuperando a hora do início da requisição
        const startRequestTime = (new Date()).getTime();

        // Realizando a consulta na API da VTEX
        const searchResult = await api.get(`/search?_from=1&_to=50&ft=${search}`) as ISearchResponseDTO;
        
        // Recuperando a hora do fim da requisição
        const endRequestTime = (new Date()).getTime();

        // Selecionando os produtos encontrados
        const productsFinded = searchResult.data.map((product) => product);

        // Selecionando os dados dos produtos que vão ser utilizados
        const compactedProductsData = productsFinded.map(product => getProductData(product));

        // Definindo as variáveis do template
        const variables = {
            totalOfProducts: productsFinded.length,
            findedProducts: productsFinded.length > 0,
            search,
            time: endRequestTime - startRequestTime,
            pageNumber: 1,
            products: compactedProductsData,
        };
        
        // Adicionando os dados na fila de envio do email
        await Queue.add('SearchMail', {
            name,
            email,
            variables,
        });
    }
}

export default SearchService;
