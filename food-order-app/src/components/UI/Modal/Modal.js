// import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames'
import globalStyles from "../../../Assets/global-styles/bootstrap.min.module.css";


const portalElement = document.body


const Modal = (props) => {

  // const onTest = (e) => { 
  //   console.log(e)

  // }

  //  return ReactDOM.createPortal(<Backdrop onClick={closeModalHandler} ><Body>{props.children}</Body></Backdrop>,portalElement);
  //TODO: Bugfix backdrop click z-index issue ? affects buttons 
  return ReactDOM.createPortal(

    <div
      className={cx(globalStyles.modal)}
      id="cartModal"
      // role="dialog"
      tabIndex="-1" 
      // onClick={props.onToggleModalHandler}
      // onClick={onTest}
      style={{ display: !props.showModal ? 'block' : 'none',backgroundColor: 'gray', position:'absolute'}}
    > 
      <div className={globalStyles['modal-dialog']} style={{zIndex: 35002, maxWidth:'80%' }} >
        <div className={globalStyles['modal-content']}>
          <div className={globalStyles['modal-header']}>
            <h1 className={cx(globalStyles['modal-title'], globalStyles['fs-5'])}>
              Your Cart
            </h1>
            <button type="button" className={globalStyles.close} data-dismiss="modal" aria-label="Close" onClick={props.onToggleModalHandler}>
            <span aria-hidden="true">×</span>
          </button>
          </div>
          <div className={globalStyles['modal-body']}>
            {props.children}
          </div>
          <div className={globalStyles['modal-footer']}>
            <button
              type="button"
              onClick={props.onToggleModalHandler}
              className={cx(globalStyles.btn, globalStyles['btn-secondary'])}
              >
              Close
            </button>
            <button type="button"
              className={cx(globalStyles.btn, globalStyles['btn-success'])}>
              Order Now
            </button> 
          </div>
        </div>
      </div>
    </div>
    , portalElement);

};



export default Modal