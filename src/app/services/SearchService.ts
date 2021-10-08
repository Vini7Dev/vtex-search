import Queue from '../jobs/Queue';
import NodeMailer from '../libs/NodeMailer';

// Serviço para executar o search
class SearchService {
    public async execute(search: string): Promise<void> {
        // Executar a busca aqui

        await Queue.add({
            name: 'Example Name',
            email: 'example@mail.com',
            html: 'Hello World!',
        });
    }
}

export default SearchService;
