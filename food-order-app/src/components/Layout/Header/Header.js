import React from "react";
import cx from "classnames";
import globalStyles from "../../../Assets/global-styles/bootstrap.min.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {

  return (
    <header>
      <nav className={cx(globalStyles.navbar, globalStyles["bg-body-tertiary"], globalStyles['fixed-top'])}
      >
        <div className={globalStyles.container}>
          <span className={globalStyles["navbar-brand"]}>React Meals</span>
          <div className={globalStyles["d-flex"]}>
            <HeaderCartButton onClick={props.onToggleModalHandler}></HeaderCartButton>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
