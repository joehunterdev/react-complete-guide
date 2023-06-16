
import cx from 'classnames'
import globalStyles from "../../../Assets/global-styles/bootstrap.min.module.css";
//{subclass,text}
/*
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>
*/
const Button = (props) => {

// const 
//  if(props.modalTarget){
    
//   {props.modalTarget ? `data-bs-toggle="modal" data-bs-target="#${modalTarget}` : ''}

//  }

 const setDisplay = (event) => {
   
    props.showModal();

 } 

  return  <button type="button" onClick={props.onClick} className={cx(globalStyles.btn,globalStyles[`btn-${props.subClass}`])} data-bs-toggle={props.toggle} data-bs-target={props.target}>{props.children}</button>

}

export default Button