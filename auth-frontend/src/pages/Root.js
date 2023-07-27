import { Outlet, useNavigation, useLoaderData, useSubmit } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
function RootLayout() {
  // const navigation = useNavigation();

  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {

    if (!token) {
      return 
    }

    if(token === 'EXPIRED'){
      submit(null, { action: '/logout', method: 'post' })
    }
    setTimeout(() => { submit(null, { action: '/logout', method: 'post' }) }, 1 * 60 * 60 * 1000);

  }, [token, submit])

  const tokenDuration = getTokenDuration();

  if(tokenDuration){
    return 'EXPIRED'
  }

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
