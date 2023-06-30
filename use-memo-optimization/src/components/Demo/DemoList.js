import React from 'react';
import { useState, useMemo } from 'react';
import classes from './DemoList.module.css';

const DemoList = (props) => {

  const {items} = props;

  //const sortedList = props.items.sort((a, b) => a - b);

  // memoiszed
  const sortedList = useMemo(() => {
    return props.items.sort((a, b) => a - b);
  },[items])

  console.log("DemoList")

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
