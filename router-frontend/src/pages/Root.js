import { Outlet,useNavigation } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import EventsNavigation from '../components/EventsNavigation';
function RootLayout() {


 //find if we have active ansition
  const navigation = useNavigation();
  // navigation === ''

  return (
    <div className='container py-3'>
      <MainNavigation />
      <main>
        {navigation.state ==='loading' && <p>Loading...</p>}
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;