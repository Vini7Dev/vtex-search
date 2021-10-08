import Queue from '../libs/Queue';
import api from '../api';

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
        // Realizando a consulta na API da VTEX
        const searchResult = await api.get(search);

        console.log(searchResult.data);

        // Adicionando os dados na fila de envio de email
        await Queue.add('SearchMail', {
            name,
            email,
            html: 'Hello World!',
        });
    }
}

export default SearchService;
