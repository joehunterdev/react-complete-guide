// import AuthContext from "./components/store/auth-context";
import React, { useContext, useState } from "react";
import Header from "./Components/Layout/Header/Header";
import Container from "./Components/UI/Container/Container";
import Hero from "./Components/Layout/Hero/Hero";
// import Modal from "./Components/UI/Modal/Modal";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

import { CartProvider } from "./store/cart-context";

function App() {

  const cartItems = useContext(CartProvider)

  const [showModal, setShowModal] = useState(false);

  const toggleModalHandler = (event) => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

   console.log(cartItems)
  
  return (
    <CartProvider>
      {showModal && <Cart onToggleModalHandler={toggleModalHandler}   />} 
      <Header onToggleModalHandler={toggleModalHandler}></Header>
      <main>
        <Container>
          <Hero></Hero>
        </Container>
        <Container>
          <Meals></Meals>
        </Container>
      </main>
    </CartProvider>
  );
}

export default App;
