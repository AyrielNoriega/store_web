import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import "../styles/Payment.css";

export const Payment = () => {
    const {state: {cart,  buyer}, addNewOrder} = useContext(AppContext)
    const navigate = useNavigate();

    const handleSumTotal = () => {
        console.log(cart);
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    const handlePaymentSuccess = (data) => {
        console.log(data.status);
            const newOrder = {
                buyer,
                product: cart,
                // payment: data
            }
            console.log(newOrder);
            addNewOrder(newOrder);
            navigate('/checkout/success');
    }

    return (
        <div className="payment">
            <div className="payment-content">
                <h3>Resument del pedido:</h3>
                {cart.map((item) => (
                    <div className="payment-item" key={item.id}>
                        <div className="payment-element">
                            <h4>{item.title}</h4>
                            <span>
                                $
                                {item.price}
                            </span>
                        </div>
                    </div>
                ))}
                <div className="payment-button">
                    <button type="button" onClick={handlePaymentSuccess}>Pagar</button>
                </div>
            </div>
        </div>
    )
}
