import Button from "../Button/Button";
import styles from "./ErrorModal.module.css";
import React,{useState} from "react"

const ErrorModal = props => {
 
//   const [display,setDisplay] = useState(true)


  const dismissModalHandler = (event) => {
    //  setDisplay(false)
     props.onDismissModalHandler(true);
   }

  if(!props.display){
    // console.log("Display Modal State " + props.displayModal)
    return false;
  }

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h2>Invalid Input</h2>
      </div>
      <div className={styles.body}>
        <p>{props.children}</p>
      </div>
      <div className={styles.footer}>
        <Button onClick={dismissModalHandler}>Ok</Button> 
      </div>
    </div>
  );
};

export default ErrorModal;
