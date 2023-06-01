import styles from './Card.module.css'; // Import css modules stylesheet as styles

function Card(props){

     return(<div className={styles.card}>{props.children}</div>)

}

export default Card