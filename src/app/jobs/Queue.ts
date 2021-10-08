import Queue from 'bull';

import redisConfig from '../../config/redis';
import SearchMail from './SearchMail';

// Criando a fila dos emails
const mailQueue = new Queue(SearchMail.key, {
    redis: redisConfig,
});

export default mailQueue;
