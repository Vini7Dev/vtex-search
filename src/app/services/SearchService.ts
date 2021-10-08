import Queue from '../libs/Queue';
import NodeMailer from '../libs/NodeMailer';

// Serviço para executar o search
class SearchService {
    public async execute(search: string): Promise<void> {
        // Executar a busca aqui

        // Adicionando os dados na fila de envio de email
        await Queue.add('SearchMail', {
            name: 'Example Name',
            email: 'example@mail.com',
            html: 'Hello World!',
        });
    }
}

export default SearchService;
