// import AuthContext from "./components/store/auth-context";
import React from "react";
import Header from "./Components/Layout/Header/Header";
import Container  from "./Components/UI/Container/Container";
import Hero from "./Components/Layout/Hero/Hero";
import Modal from "./Components/UI/Modal/Modal";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Container>
        <Hero></Hero>
      </Container>
      <Modal>Some content here</Modal>
    </React.Fragment>
  );
}

export default App;
