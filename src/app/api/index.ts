import axios from 'axios';

// Instanciando o objeto para realizar requisições na api da VTEX 
const api = axios.create({
    baseURL: 'https://vtexstore.codeby.com.br/api/catalog_system/pub/products/search/',
});

export default api;
