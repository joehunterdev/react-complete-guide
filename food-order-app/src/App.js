// import AuthContext from "./components/store/auth-context";
import React, { Fragment, useState } from "react";
import Header from "./Components/Layout/Header/Header";
import Container from "./Components/UI/Container/Container";
import Hero from "./Components/Layout/Hero/Hero";
// import Modal from "./Components/UI/Modal/Modal";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

import { CartProvider } from "./Components/Cart/CartContext";

function App() {

  const [showModal, setShowModal] = React.useState(false);

  const toggleModalHandler = (event) => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  // const hideModalHandler()  => {
  //   setShowModal(false);
  // }

  return (
    <CartProvider>
      {showModal && <Cart onToggleModalHandler={toggleModalHandler}   />} 
      <Header cart={{ items: 7 }} onToggleModalHandler={toggleModalHandler}></Header>
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
