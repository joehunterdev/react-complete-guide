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
import EventDetailPage, {loader as eventDetailLoader }from './pages/EventDetailPage';
// import React, { useEffect, useState } from 'react';
// import useHttp from './hooks/use-http';
import NewEventPage from './pages/NewEventPage';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EditEventPage from './pages/EditEvent';
// import ErrorPage from './pages/ErrorPage';
 
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
              },
              { path: 'edit', element: <EditEventPage /> },
            ],
          },
          { path: 'new', element: <NewEventPage /> },
        ],
      },
    ],
  },
]);

function App() {

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
