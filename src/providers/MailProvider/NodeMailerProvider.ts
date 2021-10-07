import nodemailer, { Transporter } from 'nodemailer';

import mailConfig from '../../config/mail';

interface ISendMailProps {
    name: string;
    email: string;
}

// Provedor para envio de emails
class NodeMailerProvider {
    private client: Transporter;

    // Iniciando o Transporter com base no arquivo das configurações de email
    constructor() {
        this.client = nodemailer.createTransport(mailConfig);
    }

    // Método para envio de um email
    public async sendMail({ name, email }: ISendMailProps): Promise<void> {
        this.client.sendMail({
            from: 'Codeby <contato@codeby.com.br>',
            to: `${name} <${email}>`,
            subject: 'Produtos disponíveis na loja',
            html: 'Hello World!',
        });
    } 
}

export default NodeMailerProvider;
