import axios from 'axios';
import React, {Component} from 'react';
import './App.js';
 
const api = axios.create({
    baseURL: 'https://api.mercadolibre.com/sites/MLA/search?limit=4&q=${this.state.busca}',
});

export default api;