import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import PropTypes from 'prop-types';
import "../styles/Information.css";

export const Information = () => {
    const {state: {cart}, addToBuyer} = useContext(AppContext);
    const navigate = useNavigate();
    const form = useRef(null);

    const handleSubmit = () => {
        const formData = new FormData(form.current);
        const buyer = {
            'name':     formData.get('name'),
            'email':    formData.get('email'),
            'address':  formData.get('address'),
            'apto':     formData.get('apto'),
            'city':     formData.get('city'),
            'country':  formData.get('country'),
            'state':    formData.get('state'),
            'cp':       formData.get('cp'),
            'phone':    formData.get('phone'),
        }
        console.log(buyer);
        if (!buyer.name) return;
        if (!buyer.email) return;
        if (!buyer.address) return;
        if (!buyer.apto) return;
        if (!buyer.city) return;
        if (!buyer.country) return;
        if (!buyer.state) return;
        if (!buyer.cp) return;
        if (!buyer.phone) return;

        addToBuyer(buyer);
        navigate('/checkout/payment');
    }

    return (
        <div className="information">
            <div className="information-content">
                <div className="information-head">
                    <h2>Información de contácto:</h2>
                </div>
                <div className="information-form">
                    <form ref={form}>
                        <input type="text" placeholder="Nombre completo" name="name"/>
                        <input type="text" placeholder="Correo electronico" name="email"/>
                        <input type="text" placeholder="Dirección" name="address"/>
                        <input type="text" placeholder="Apto" name="apto"/>
                        <input type="text" placeholder="Ciudad" name="city"/>
                        <input type="text" placeholder="Pais" name="country"/>
                        <input type="text" placeholder="Estado" name="state"/>
                        <input type="text" placeholder="Códido postal" name="cp"/>
                        <input type="text" placeholder="Teléfono" name="phone"/>
                    </form>
                </div>
                <div className="information-buttons">
                    <div className="information-back">
                        <Link to="/checkout">
                            Regresar
                        </Link>
                    </div>
                    <div className="information-next">
                        <button type="button" onClick={handleSubmit}>Pagar</button>
                    </div>
                </div>
            </div>
            <div className="information-sidebar">
                <h3>Pedido:</h3>
                {cart.map((item) => (
                    <div className="information-item" key={item.id}>
                        <div className="information-element">
                            <h4>{item.title}</h4>
                            <span>
                                $
                                {item.price}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
