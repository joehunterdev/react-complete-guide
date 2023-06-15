import React from "react";
// import styles from "./Header.module.css";
import cx from 'classnames'
import globalStyles from "../../../Assets/global-styles/bootstrap.min.module.css";
import Button from '../../UI/Button/Button'
const MainHeader = (props) => {
  return (
    <header>
    <nav className={cx(globalStyles.navbar,globalStyles['bg-body-tertiary'])} >
      <div className={globalStyles.container}>
        <span className={globalStyles['navbar-brand']}>React Meals</span>
       <div className={globalStyles['d-flex']}>
           <Button subClass="btn-danger" target="modal" modal="staticBackdrop">Cart</Button> 
        </div> 
      </div>
    </nav>
    </header>
  );
};

export default MainHeader;
