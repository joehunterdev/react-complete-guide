// import AuthContext from "./components/store/auth-context";
import React,{Fragment} from "react";
import Header from "./Components/Layout/Header/Header";
import Container  from "./Components/UI/Container/Container";
import Hero from "./Components/Layout/Hero/Hero";
import Modal from "./Components/UI/Modal/Modal";
import Meals from "./Components/Meals/Meals";
function App() {
  return (
    <Fragment>
      <Header cart={{items:7}}></Header>
      <Container>
        <Hero></Hero>
      </Container>
      <Container>
        <Meals></Meals>
      </Container>
    </Fragment>
  );
}

export default App;
