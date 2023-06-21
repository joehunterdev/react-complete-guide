import React from "react";
// import { createPortal } from "react-dom";
// import styles from "./Header.module.css";
import cx from "classnames";
import globalStyles from "../../../Assets/global-styles/bootstrap.min.module.css";
import Button from "../../UI/Button/Button";
// import Modal from "../../UI/Modal/Modal";
const Header = props => {

  return (
    <header>
      <nav className={cx(globalStyles.navbar, globalStyles["bg-body-tertiary"])}
      >
        <div className={globalStyles.container}>
          <span className={globalStyles["navbar-brand"]}>React Meals</span>
          <div className={globalStyles["d-flex"]}>
            <Button
              subClass="btn-danger"
              target="modal"
              modal="staticBackdrop"
              onClick={props.onToggleModalHandler}
            ><span>{props.cart.items} Items</span> 
              Cart
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
