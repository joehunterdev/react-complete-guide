
import cx from 'classnames'
import globalStyles from "../../../Assets/global-styles/bootstrap.min.module.css";
//{subclass,text}
/*
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>
*/
const Button = (props) => {

//  if(props.modalTarget){
    
//   {props.modalTarget ? `data-bs-toggle="modal" data-bs-target="#${modalTarget}` : ''}

//  }

  return  <button type="button" className={cx(globalStyles.btn,globalStyles[`btn-${props.subClass}`])} data-bs-toggle={props.toggle} data-bs-target={props.target}>{props.children}</button>

}

export default Button