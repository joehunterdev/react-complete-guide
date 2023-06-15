import cx from 'classnames'
import globalStyles from "../../../Assets/global-styles/bootstrap.min.module.css";
// import Modal from 'react-bootstrap/Modal'
// portal
const Modal = (props) => {

// const dismissModalHandler = (event) => {
//      props.onDismissModalHandler(true);
// }

// if(!props.display){
// return false;
// }

  return (
    <div
      className={cx(globalStyles.modal,globalStyles.fade,globalStyles.show)}
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
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
              aria-label="Close"
            ></button>
          </div>
          <div className={globalStyles['modal-body']}>
             {props.children}
          </div>
          <div className={globalStyles['modal-footer']}>
            <button
              type="button"
              className={cx(globalStyles.btn,globalStyles['btn-secondary'])}
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className={cx(globalStyles.btn,globalStyles['btn-primary'])}>
              Understood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal