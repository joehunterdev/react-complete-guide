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

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index:true, element: <HomePage /> },
      { path: 'events', element: <EventsPage /> },
      { path: 'events/:eventId', element: <EventDetailPage /> }
    ],
    
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
