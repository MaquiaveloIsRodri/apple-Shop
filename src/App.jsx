import './App.css'
import Nav from './molecules/nav'
import Password from './molecules/modal.jsx'
import { useState } from 'react';
import Productmain from './molecules/ProductMain.jsx'
import CheckoutForm from './molecules/checkoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import precios from './API/precios'
const stripePromise = loadStripe('pk_test_51LQHTKFnfyapezHgpemwTMJpeIgWZDlWTGsqvKvAwm2iSnyWXN9fltCejIp1CaQoW1hPDXmNyMIkthJtzRBUPbD500mCvvRXLZ');

function App() {
  const [within, setWithin] = useState(false);
  const [Sesion, SetSesion] = useState(false);
  const [id,setId] = useState();
  const [buy,setBuy] = useState(false);
  const {precio} = precios(id);
  return (
    <Elements stripe={stripePromise}>
      <div className={Sesion ? "SinSesion" : "conSesion"}>
        {
          Sesion ?
            <Password
              SetSesion={SetSesion}
              within={within}
              setWithin={setWithin}
            /> : null
        }
        <Nav
          Sesion={Sesion}
          SetSesion={SetSesion}
        />
        <Productmain 
          id={id}
          setId={ setId }
          precio={precio}
          setBuy={setBuy}
          within={within}
        />
        {
          buy ?
          <CheckoutForm 
          setBuy={setBuy}
          precio={precio}
        />
        : null
        }



      </div>
    </Elements>

  )
}

export default App
