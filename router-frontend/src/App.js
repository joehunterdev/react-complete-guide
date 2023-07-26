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
import EventDetailPage from './pages/EventDetailPage';
// import React, { useEffect, useState } from 'react';
// import useHttp from './hooks/use-http';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventsPage';
import EventsPage, { loader as eventsLoader } from './pages/Events';
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
          { path: ':eventId', element: <EventDetailPage /> },
          { path: 'new', element: <NewEventPage /> },
          { path: ':eventId/edit', element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
