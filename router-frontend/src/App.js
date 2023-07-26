import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from 'react-router-dom';
import RootLayout from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import EventDetailPage from './pages/EventDetailPage';
import React, { useEffect, useState } from 'react';
import useHttp from './hooks/use-http';
import NewEventsPage from './pages/NewEventsPage';
import EditEventPage from './pages/EditEventsPage';
const baseUrl = 'http://localhost:8080/events'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'events/:eventId', element: <EventDetailPage /> },
      {
        children: [
          { path: 'events/new', element: <NewEventsPage /> },
          { path: 'events/:eventId/edit', element: <EditEventPage /> }
        ]
      },

    ],

  }
]);

function App() {

  const [events, setEvents] = useState([]);
  const { isLoading, error, sendRequest: fetchEvents } = useHttp(); // neatly unpack declare above top level

  //make successfull useHttp request
  //transform 
  useEffect(() => {

    const eventList = (data) => {
      // const loadedEvents = [];
      // for (const eventKey in data) {
      //   loadedEvents.push({ id: eventKey, text: data[eventKey].text });
      // }
      const loadedEvents = data.events.map(eventData => {
        //this seems a bit redundant
        return { id: eventData.id, title: eventData.title, description: eventData.description };
      })
      setEvents(loadedEvents)
    }

    fetchEvents({ url: baseUrl }, eventList) //call back here

    //optional return or cleanup
  }, [fetchEvents])//dependancies


  return <RouterProvider router={router} events={events}></RouterProvider>;
}

export default App;
