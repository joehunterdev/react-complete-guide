import { useState, useEffect } from "react";
import EventsList from "../components/EventsList";
import useHttp from "../hooks/use-http";
import EventsNavigation from '../components/EventsNavigation';
const EventsPage = () => {

  const [events, setEvents] = useState([]);
  const { isLoading, error, sendRequest: fetchEvents } = useHttp(); // neatly unpack declare above top level

  //make successfull useHttp request
  //transform 
  useEffect(() => {

    const eventList = (data) => {

      const loadedEvents = data.events.map(eventData => {
        //this seems a bit redundant
        return { id: eventData.id, title: eventData.title, description: eventData.description };
      })
      setEvents(loadedEvents)
    }

    fetchEvents({ url: 'http://localhost:8080/events/' }, eventList) //call back here

    //optional return or cleanup
  }, [fetchEvents])//dependancies

  return (
    <div className="row d_flex">
        <EventsNavigation />

      {isLoading && <p>Loading...</p>}
      {/* {error && <p>{error}</p>} */}
      {events.map(event =>
        <EventsList
          key={event.id}
          id={event.id}
          title={event.title}
          description={event.description}
          date={event.date}
          image={event.image}
        />

      )
      }
    </div>

  )
}
export default EventsPage