import { useState, useEffect } from "react";
import useHttp from "../hooks/use-http";
import { useParams } from 'react-router-dom';
// import { Nav } from "react-bootstrap";
// import Jumbotron from 'react-bootstrap/Jumbotron'
// import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom';
const EventDetailPage = () => {

    let { eventId } = useParams();

    const [event, setEvent] = useState({});
    const { isLoading, error, sendRequest: fetchEvents } = useHttp(); // neatly unpack declare above top level

    useEffect(() => {

        const eventDetails = (data) => {

            const loadedEvent = data.events.find(eventData => eventData.id === eventId);
            setEvent(loadedEvent)

        }

        fetchEvents({ url: 'http://localhost:8080/events' }, eventDetails) //call back here

    }, [fetchEvents])

    console.log(event)

    return (
        <>
            <div className="container my-5">
                <div className="p-5 text-center bg-body-tertiary rounded-3">

                    <h1 className="text-body-emphasis">{event.description}</h1>
                    <p className="col-lg-8 mx-auto fs-5 text-muted">
                        {/* {event.title} */}
                        {event.description}
                    </p>
                    <div className="d-inline-flex gap-2 mb-5">
                        <NavLink to={`/events/`} props={event}>    
                        <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
                            Back to events
                        </button>
                        </NavLink>
                        <button className="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EventDetailPage

//     < div className="p-5 text-center bg-body-tertiary rounded-3" >
//         <svg className="bi mt-4 mb-3" style="color: var(--bs-indigo);" width="100" height="100"><use xlink: href="#bootstrap"></use></svg>

//   </ >