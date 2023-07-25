import { Fragment, useCallback } from "react";
import { useState, useEffect } from "react";
import EventsList from "../components/EventsList";

const EventsPage = () => {

  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEventsHandler = useCallback(async () => {
    //Loading
    setIsLoading(true);
    setError(null);

    try {
      // With await
      const response = await fetch('http://localhost:8080/events');
      //statusCode !== 200
      if (!response.ok) {
        throw new Error("Status code: " + response.statusCode)
      }
      const data = await response.json();

      const transformedEvents = data.events.map(eventData => {
        //this seems a bit redundant
        return { id: eventData.id, title: eventData.title, description: eventData.description };
      })
      setEvents(transformedEvents)

    } catch (error) {

      setError(error.message)
    }
    setIsLoading(false) // regardless we need to stop loading
  }, [])

  useEffect(() => {
    fetchEventsHandler();
  }, [fetchEventsHandler])
  console.log(events)
  return (
    <div className="row d_flex">

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
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