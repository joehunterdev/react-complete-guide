// import styles from "./Header.module.css";
import cx from 'classnames'
import globalStyles from "../../../Assets/global-styles/bootstrap.min.module.css";
import Button from '../../UI/Button/Button';

 const Hero = () => {
    return(
    <section className={cx(globalStyles['py-5'],globalStyles['text-center'],globalStyles['container'])}>
        <div   className={cx(globalStyles.row,globalStyles['py-lg-5'])}>
        <div  className={cx(globalStyles['col-lg-6'],globalStyles['col-md-8'],globalStyles['mx-auto'])}>
            <h1 className={globalStyles['fw-light']}>Meals</h1>
            <p className={cx(globalStyles.lead,globalStyles['text-body-secondary'])}>Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
            <p>
             <Button subClass="default">default</Button>
             <Button subClass="warning">warning</Button>
            </p>
        </div>
        </div>
    </section>
    )

}

export default Hero