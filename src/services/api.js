import React from 'react';
import axios from 'axios';


export const getProductsApi = async () => {
    try {
        const response = await axios.get('http://localhost/api_products/public/api/v1/products');
        const data = response.data;
        return response.data.data;
    } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
        throw error;
    }
}
