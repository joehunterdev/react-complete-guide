import React from 'react';

// import Navigation from './Navigation';
import classes from './Header.module.css';

const MainHeader = (props) => {
  return (
    // <header className={classes['main-header']}>
    <header className={classes['header']}>
      <h1>React Meals</h1>
      <div className='main-image'>
        <img src='./meals.jpg' alt="some header" />
      </div>
      <HeaderCartButton /> 
    </header>
  );
};

export default MainHeader;
