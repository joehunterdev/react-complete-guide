// import AuthContext from "./components/store/auth-context";
import React, { Fragment, useState } from "react";
import Header from "./Components/Layout/Header/Header";
import Container from "./Components/UI/Container/Container";
import Hero from "./Components/Layout/Hero/Hero";
// import Modal from "./Components/UI/Modal/Modal";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
function App() {

  const [showModal, setShowModal] = React.useState(false);

  const showModalHandler = (event) => {
    console.log("Show modal handler triggered app.js");
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <Fragment>
      {showModal && <Cart onDismissModalHandler={showModalHandler} showModal={showModal} />} 
      <Header cart={{ items: 7 }} onDismissModalHandler={showModalHandler}></Header>
      <main>
        <Container>
          <Hero></Hero>
        </Container>
        <Container>
          <Meals></Meals>
        </Container>
      </main>
    </Fragment>
  );
}

export default App;
