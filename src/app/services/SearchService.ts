import Queue from '../libs/Queue';
import api from '../api';

interface IRequest {
    name: string;
    email: string;
    search?: string;
}

interface ISearchItemData {
    productId: string;
    productName: string;
    categories: string[];
    link: string;
}

interface ISearchResponse {
    data: ISearchItemData[];
}

// Serviço para executar o search
class SearchService {
    public async execute({
        name,
        email,
        search = '',
    }: IRequest): Promise<void> {
        // Realizando a consulta na API da VTEX
        const searchResult = await api.get(search) as ISearchResponse;

        // Selecionando os dados da resposta que vão ser utilizados
        const productsFinded = searchResult.data.map((product) => product);

        console.log(productsFinded);

        /*
        // Adicionando os dados na fila de envio de email
        await Queue.add('SearchMail', {
            name,
            email,
            html: 'Hello World!',
        });
        */
    }
}

export default SearchService;
