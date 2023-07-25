import Card from 'react-bootstrap/Card'
const EventDetailPage = ({image,description}) => {

    // const GetEvents = (id,{title,description,date,image}) => {
    //     return fetch('http://localhost:8080/events').json()
    // } 
    return(

        <Card style={{ width: '18rem' }}>
         
            <Card.Body>
                <Card.Image><img src={image} alt="some image" /></Card.Image>
                <Card.Text>
                   {description}
                </Card.Text>
            </Card.Body>
         
        </Card>

    )
}
export default EventDetailPage