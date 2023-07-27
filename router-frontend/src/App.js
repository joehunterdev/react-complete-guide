import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from 'react-router-dom';
import RootLayout from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import EventsRootLayout from './pages/EventsRoot';
// import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetail';
import NewEventPage, {action as newEventAction } from './pages/NewEventPage';
// import React, { useEffect, useState } from 'react';
// import useHttp from './hooks/use-http';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EditEventPage from './pages/EditEvent';
// import ErrorPage from './pages/ErrorPage';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';
import Auth from './pages/Auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },

      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },

    ],
  },
]);


function App() {

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
