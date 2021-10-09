import fs from 'fs';
import handlebars from 'handlebars';

// Definindo o tipo das variáveis para o template
interface ITemplateVariables {
    [key: string]: string | number | boolean | object[];
}

// Dados para realizar o parse do template
interface IParseMailRequest {
    file: string;
    variables: ITemplateVariables;
}

class Handlebars {
    public async parse({
        file,
        variables,
    }: IParseMailRequest): Promise<string> {
        // Lendo o arquivo de template
        const template = await fs.promises.readFile(file, {
            encoding: 'utf-8',
        });

        // Compilando o arquivo de template com o handlebars
        const parseTemplate = handlebars.compile(template);

        // Retornando o template preenchido com as variáveis
        return parseTemplate(variables);
    }
}

export default Handlebars;
