import NodeMailerProvider from "../providers/MailProvider/NodeMailerProvider";

// Serviço para executar o search
class SearchService {
    public async execute(search: string): Promise<void> {
        // Instanciando o provedor de emails e enviando o email
        const nodeMailerProvider = new NodeMailerProvider();

        await nodeMailerProvider.sendMail({
            name: 'Example',
            email: 'example@mail.com',
        });
    }
}

export default SearchService;
