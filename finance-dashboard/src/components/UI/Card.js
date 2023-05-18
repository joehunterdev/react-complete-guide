import './Card.css'

function Card(props){

     const classes = 'card ' + props.className; //making sure any value added will get appended here
     return(<div className={classes}>{props.children}</div>)

}

export default Card