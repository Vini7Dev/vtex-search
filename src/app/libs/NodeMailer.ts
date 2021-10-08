import nodemailer from 'nodemailer';

import mailConfig from '../../config/mail';

// Criando o Transport para o envio de emails com base nas credênciais
export default nodemailer.createTransport(mailConfig);

