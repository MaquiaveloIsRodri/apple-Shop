import React from "react";
import { useState } from "react";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import '../css/checkoutForm.css'
import axios from "axios";

const CheckoutForm = (props) => {
    const [cardComplete, setCardComplete] = useState(false);
    const [error, setError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
        if (error) {
            setError(error.message);
        } else {
            setError(null);
            setCardComplete(true);
            const {id} = paymentMethod;
            const {data} = await axios.post("https://shopp-apple-express.herokuapp.com/api/checkout",{
                id,
                amount:props.precio
            });  
            alert(data);          
        }
    }
    return (
        <form className="formulario-paga" onSubmit={handleSubmit}>
            <CardElement
                className="tarjeta"
            />
            <div className="conteiner-button">
                <button
                    className="btn-pagar"
                >
                    Pagar
                </button>
                <button
                    type="button"
                    className="btn-cancelar"
                    onClick={() => props.setBuy(false)}
                >
                    Cancelar
                </button>
            </div>
            {error && <div>Error: {error.message}</div>}
        </form>
    );

}

export default CheckoutForm;