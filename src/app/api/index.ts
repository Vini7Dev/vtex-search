import axios from 'axios';

// Instanciando o objeto para realizar requisições na api da VTEX 
const api = axios.create({
    // Definindo a URL padrão para as requisições
    baseURL: 'https://vtexstore.codeby.com.br/api/catalog_system/pub/products/',
    // Definindo os headers padrões para as requisições
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
});

export default api;
