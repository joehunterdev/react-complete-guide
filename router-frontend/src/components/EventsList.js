import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { Link } from 'react-router-dom'

function EventsList (props) {
    console.log(props)
    return(

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.date}  />
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                {/* <img src={image} alt={description} /> */}
                {/* <Card.Image>/Card.Image> */}
                <Card.Text>
                   {props.description}
                </Card.Text>
            </Card.Body>
            <ListGroup flush>
                <ListGroupItem>{props.date}</ListGroupItem>
                {/* <ListGroupItem>{props.Dapibus ac facilisis in}</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
            </ListGroup>
            <Card.Body>
                <Card.Link><Link to={props.id}>See this event</Link></Card.Link>
                <Card.Link><Link to="/">Back</Link></Card.Link>
            </Card.Body>
        </Card>

    )
}
export default EventsList