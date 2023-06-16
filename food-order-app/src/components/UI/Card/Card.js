import cx from 'classnames'
import globalStyles from "../../../Assets/global-styles/bootstrap.min.module.css";

const Card =  (props) =>  {
    return(
        <div className={cx(globalStyles.card,globalStyles['mb-4'],globalStyles['rounded-3'],globalStyles['shadow-sm'])}>
          <div className={cx(globalStyles['card-header'],globalStyles['fw-normal'])}>

            <h4 className={cx(globalStyles['my-0'],globalStyles['py-3'],globalStyles['shadow-sm'])}>{props.title}</h4>

          </div>
          <div className={cx(globalStyles['card-body'],globalStyles['py-3'],globalStyles['shadow-sm'])}>
           {props.children} 
          </div>
        </div>
    )
}

export default Card