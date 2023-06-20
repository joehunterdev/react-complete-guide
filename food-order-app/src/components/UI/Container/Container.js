// import styles from "./Header.module.css";
// import cx from 'classnames'
import globalStyles from "../../../Assets/global-styles/bootstrap.min.module.css";

const Container = (props) => {
    return (
        // <main>
            <div className={globalStyles.container}>
                {props.children}
            </div>
        // </main>
    )
}

export default Container