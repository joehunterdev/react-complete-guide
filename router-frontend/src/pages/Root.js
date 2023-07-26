import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import EventsNavigation from '../components/EventsNavigation';
function RootLayout() {

  return (
    <div className='container py-3'>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;