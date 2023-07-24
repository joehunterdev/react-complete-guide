import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';

const router = createBrowserRouter([{
  path:'/', element:<Home/>},
  { path:'/prodcts', element:<Products />}
, {}])

function App() {

  return <RouterProvider router={router} />

} 

export default App;
