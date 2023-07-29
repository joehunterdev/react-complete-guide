import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
// import BlogPage, { loader as postsLoader } from './pages/Blog';
import HomePage from './pages/Home';
import PostPage, { loader as postLoader } from './pages/Post';
import RootLayout from './pages/Root';
import lazy from './utils/lazy';

//you can write 
const BlogPage = lazy(() => import('./pages/Blog'))
const RootLayout = lazy(() => import('./pages/Root'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'posts',
        children: [
          { index: true, element: <Suspense fallback={<p>Whoopie</p>}><BlogPage /></Suspense>, loader: () => import('./pages/Blog').then(module => module.loader()) },
          { path: ':id', element:  <Suspense fallback={<p>Whoopie</p>}><PostPage /></Suspense>, loader: (meta) => import('./pages/Post').then(module => module.loader() ) },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
