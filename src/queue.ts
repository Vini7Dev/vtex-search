import 'dotenv/config';

import Queue from './app/jobs/Queue';
import SearchMail from './app/jobs/SearchMail';

// Configurando o processamento do envio de email
Queue.process(SearchMail.handle);
