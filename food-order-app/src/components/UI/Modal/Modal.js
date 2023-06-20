// import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames'
import globalStyles from "../../../Assets/global-styles/bootstrap.min.module.css";

// import Modal from 'react-bootstrap/Modal'
// portal
// const Backdrop = (props) => {
//   const closeModalHandler = (event) => {
//     props.onDismissModalHandler(false)
//   };
//   return (
//     <div
//       className={cx(globalStyles.modal, globalStyles.block)}
//       id="staticBackdrop"
//       data-bs-backdrop="static"
//       data-bs-keyboard="false"
//       tabIndex="-1"
//       aria-labelledby="staticBackdropLabel"
//       // aria-hidden="true"
//       role="dialog"
//       onClick={closeModalHandler}
//       style={{ display: !props.showModal ? 'block' : 'none' }}
//     >
//       {props.children}
//     </div>
//   )

// }


// const Body = props => {
//   //   const closeModalHandler = (event) => {
//   //     props.onDismissModalHandler(false)
//   //  };

//   return (
//     <div className={globalStyles['modal-dialog']}>
//       <div className={globalStyles['modal-content']}>
//         <div className={globalStyles['modal-header']}>
//           <h1 className={cx(globalStyles['modal-title'], globalStyles['fs-5'])} id="staticBackdropLabel">
//             Add to order
//           </h1>
//           <button
//             type="button"
//             className={globalStyles['btn-close']}
//             data-bs-dismiss="modal"
//             // onClick={closeModalHandler}
//             aria-label="Close"
//           ></button>
//         </div>
//         <div className={globalStyles['modal-body']}>
//           {props.children}
//         </div>
//         <div className={globalStyles['modal-footer']}>
//           <button
//             type="button"
//             // onClick={closeModalHandler}
//             className={cx(globalStyles.btn, globalStyles['btn-secondary'])}
//             data-bs-dismiss="modal"
//           >
//             Close
//           </button>
//           <button type="button"
//             //  onClick={closeModalHandler} 
//             className={cx(globalStyles.btn, globalStyles['btn-primary'])}>
//             Understood
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

const portalElement = document.getElementById('root');


const Modal = (props) => {

  const dismissModalHandler = (event) => {

    props.onDismissModalHandler(false)
  };

  //  return ReactDOM.createPortal(<Backdrop onClick={closeModalHandler} ><Body>{props.children}</Body></Backdrop>,portalElement);
  //TODO: Bugfix backdrop click z-index issue
  return ReactDOM.createPortal(
    <div
      className={cx(globalStyles.modal, globalStyles.block,globalStyles["background-green"])}
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      // aria-hidden="true"
      role="dialog"
      // onClick={dismissModalHandler}
      style={{ display: !props.showModal ? 'block' : 'none' }}
    >
      <div className={globalStyles['modal-dialog']} style={{ zIndex: 99 }}>
        <div className={globalStyles['modal-content']}>
          <div className={globalStyles['modal-header']}>
            <h1 className={cx(globalStyles['modal-title'], globalStyles['fs-5'])} id="staticBackdropLabel">
              Add to order
            </h1>
          </div>
          <div className={globalStyles['modal-body']}>
            {props.children}
          </div>
          <div className={globalStyles['modal-footer']}>
            <button
              type="button"
              onClick={dismissModalHandler}
              className={cx(globalStyles.btn, globalStyles['btn-secondary'])}
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button"
              className={cx(globalStyles.btn, globalStyles['btn-success'])}>
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
    , portalElement);

};



export default Modal