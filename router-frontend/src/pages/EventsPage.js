import { Fragment, useCallback } from "react";
import { useState,useEffect } from "react";
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
          data.map(eventData => {{console.log(eventData)}})

          const transformedEvents = data.events.map(eventData => {
            return {
              id: eventData.id,
              title: eventData.title,
            //   openingText: eventData.opening_crawl,
            //   releaseDate: eventData.release_date
            }
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

    return(
        <Fragment>{isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
       <h1>Events Page {events} </h1></Fragment>

    )
}
export default EventsPage