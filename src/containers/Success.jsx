import React from "react";
import "../styles/Success.css";

export const Success = () => {
    return (
        <div className="success">
            <div className="success-content">
                <h2>Ayriel, gracias por tu compra</h2>
                <span>Tu pedido llegará en tres días en tu direccion:</span>
                <div className="success-map">
                    direccion xxxxxx
                </div>
            </div>
        </div>
    )
}
