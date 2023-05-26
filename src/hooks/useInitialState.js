import { useEffect, useState } from 'react';
// import initialState from '../initialState';
import { getProductsApi } from '../services/api';

export const useInitialState = () => {

    let initialState = {
        cart: [],
        buyer: [],
        orders: [],
        products: [],
    }

    const [ state, setState] = useState(initialState);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getProductsApi();
            // initialState.products = [...data];
            setState({
                ...state,
                products: data
            });
            // Actualiza el estado con los productos recibidos
          } catch (error) {
            // Maneja el error de acuerdo a tus necesidades
          }
        };
      
        fetchData();
    }, []);

    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    }

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id)
        });
    }

    const addToBuyer = (payload) => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        });
    }

    const addNewOrder = (payload) => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        });
    }

    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        state,
    }

};
