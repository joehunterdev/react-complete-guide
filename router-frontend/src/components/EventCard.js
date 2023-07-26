 import Card from 'react-bootstrap/Card'
//  import { Button } from 'bootstrap'

import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { NavLink, Link } from 'react-router-dom'

//Todo: events router
 
function EventCard(props) {
  //Heres how we would nav programatically
  // const navigate = useNavigate();

  // function navigateHandler() {
  //   navigate('/products');
  // }

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>
                {/* <Card.Title>{props.title}</Card.Title> */}
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
                <Card.Link>
                 <NavLink to={`/events/${props.id}`} props={props}><button className='btn btn-primary'>See this event</button></NavLink>
               </Card.Link>
                {/* <Link key={props.id} to={{ pathname: `/events/${props.id}`, state: [{ test: "some" } ]}} > */}
           
            </Card.Body>
        </Card>

    )
}
export default EventCard

