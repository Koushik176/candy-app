//import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Candies from "./Components/Candies/Candies";
import CandyForm from "./Components/CandyForm/CandyForm";
import Header from "./Components/Layout/Header/Header";
import CartProvider from "./store/CartProvider";
import QuantityProvider from "./store/QuantityProvider";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <QuantityProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler}/>
        <CandyForm />
        <Candies />
      </QuantityProvider>
    </CartProvider>
  );
}

export default App;
