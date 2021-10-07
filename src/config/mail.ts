// Configuração da conta MailTrap presente no arquivo .env
    // OBS: Será preciso cirar uma conta no Mailtrap para adquirir as credenciais,
    // em seguida preencher o arquivo ".env.example" (na raiz do projeto) com estas
    // credenciais, e assim renomear este arquivo para ".env"
export default {
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    }
};
