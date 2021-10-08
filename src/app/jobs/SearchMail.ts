import nodemailer from 'nodemailer';

import NodeMailer from '../libs/NodeMailer';

interface ISendMailProps {
    name: string;
    email: string;
    html: string;
}

interface ISearchMailData {
    data: ISendMailProps;
}

// Job para envio de email ao realizar o "search"

export default {
    key: 'SearchMail',
    async handle({
        data
    }: ISearchMailData) {
        await NodeMailer.sendMail({
            from: 'Codeby <contato@codeby.com.br>',
            to: `${data.name} <${data.email}>`,
            subject: 'Produtos disponíveis na loja',
            html: data.html,
        });
    }
}