import path from 'path';

import ISearchResponseDTO from '../dtos/ISearchResponseDTO';
import api from '../api';
import Handlebars from '../libs/Handlebars';
import getProductData from '../utils/getProductData';

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
        search,
    }: IRequest): Promise<void> {
        // Recuperando a hora do início da requisição
        const startRequestTime = (new Date()).getTime();

        // Realizando a consulta na API da VTEX
        const searchResult = await api.get(search) as ISearchResponseDTO;
        
        // Recuperando a hora do fim da requisição
        const endRequestTime = (new Date()).getTime();

        // Selecionando os dados da resposta que vão ser utilizados
        const productsFinded = searchResult.data.map((product) => product);

        // Gerando a lista dos produtos com os dados compactados
        const compactedProductsData = productsFinded.map(product => getProductData(product));

        // Recuperando o arquivo template de email
        const templateMail = path.resolve(__dirname, '..', 'views', 'searchMail.hbs');

        // Estruturando as variáveis do template
        const variables = {
            totalOfProducts: productsFinded.length,
            findedProducts: productsFinded.length > 0,
            search,
            time: endRequestTime - startRequestTime,
            pageNumber: 1,
            products: compactedProductsData,
        };

        // Gerando o template do email com base na resposta da requisição
        const handlebarsMailTemplate = new Handlebars();

        const parsedMailTemplate = await handlebarsMailTemplate.parse({
            file: templateMail,
            variables,
        });

        console.log(parsedMailTemplate);

        /*
        // Adicionando os dados na fila de envio de email
        await Queue.add('SearchMail', {
            name,
            email,
            html: parsedMailTemplate,
        });
        */
    }
}

export default SearchService;
