import nodemailer from 'nodemailer';
import path from 'path';

import Handlebars from '../libs/Handlebars';
import NodeMailer from '../libs/NodeMailer';

interface ITemplateVariables {
    [key: string]: string | number | boolean | object[];
}

interface ISendMailProps {
    name: string;
    email: string;
    variables: ITemplateVariables;
}

interface ISearchMailData {
    data: ISendMailProps;
}

// Job para o envio de email ao realizar o "search"
export default {
    key: 'SearchMail',
    async handle({
        data
    }: ISearchMailData) {
        // Recuperando o arquivo do template de email
        const templateMail = path.resolve(__dirname, '..', 'views', 'searchMail.hbs');

        // Instanciando a classe para gerar o template do email com base nas variáveis
        const handlebarsMailTemplate = new Handlebars();

        // Convertendo o template com base nas variáveis
        const parsedMailTemplate = await handlebarsMailTemplate.parse({
            file: templateMail,
            variables: data.variables,
        });

        // Enviando o email
        await NodeMailer.sendMail({
            from: 'Codeby <contato@codeby.com.br>',
            to: `${data.name} <${data.email}>`,
            subject: 'Produtos disponíveis na loja',
            html: parsedMailTemplate,
        });
    }
}