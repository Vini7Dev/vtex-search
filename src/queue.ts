import 'dotenv/config';

import Queue from './jobs/Queue';
import SearchMail from './jobs/SearchMail';

// Configurando o processamento do envio de email
Queue.process(SearchMail.handle);
