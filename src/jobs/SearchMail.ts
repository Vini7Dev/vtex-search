import nodemailer from 'nodemailer';

import NodeMailer from '../libs/NodeMailer';

interface ISendMailProps {
    name: string;
    email: string;
    html: string;
}

// Job para envio de email ao realizar o "search"

export default {
    key: 'SearchMail',
    async handle({
        name,
        email,
        html,
    }: ISendMailProps) {
        await NodeMailer.sendMail({
            from: 'Codeby <contato@codeby.com.br>',
            to: `${name} <${email}>`,
            subject: 'Produtos disponíveis na loja',
            html,
        });
    }
}