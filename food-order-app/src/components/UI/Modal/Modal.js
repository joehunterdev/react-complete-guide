import React, {useState} from 'react';
import cx from 'classnames'
import globalStyles from "../../../Assets/global-styles/bootstrap.min.module.css";

// import Modal from 'react-bootstrap/Modal'
// portal

const Modal = (props) => {

  const closeModalHandler = (event) => {
     props.onDismissModalHandler(false)
  };

  return (
    <div
      className={cx(globalStyles.modal,globalStyles.block)}
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      // aria-hidden="true"
      role="dialog"
      style={{display:props.showModal ? 'block' : 'none' }}
    >
      <div className={globalStyles['modal-dialog']}>
        <div className={globalStyles['modal-content']}>
          <div className={globalStyles['modal-header']}>
            <h1 className={cx(globalStyles['modal-title'],globalStyles['fs-5'])} id="staticBackdropLabel">
              Add to order  
            </h1>
            <button
              type="button"
              className={globalStyles['btn-close']}
              data-bs-dismiss="modal"
              onClick={closeModalHandler}
              aria-label="Close"
            ></button>
          </div>
          <div className={globalStyles['modal-body']}>
             {props.children}
          </div>
          <div className={globalStyles['modal-footer']}>
            <button
              type="button"
              onClick={closeModalHandler}
              className={cx(globalStyles.btn,globalStyles['btn-secondary'])}
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" onClick={closeModalHandler} className={cx(globalStyles.btn,globalStyles['btn-primary'])}>
              Understood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal