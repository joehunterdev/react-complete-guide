import { Fragment, StrictMode } from 'react';
import Counter from './components/Counter';
import Auth from '../src/components/Auth'
import Header from '../src/components/Header'
import { useSelector } from 'react-redux'

//Todo: switch between auth and user features + counter

function App() {

  const isLoggedIn = useSelector(state => state.auth.isAuthenticated)

  return (
    <StrictMode>
      {!isLoggedIn ?
        <Auth></Auth> :
        <Fragment>
          <Header></Header>
          <Counter />
        </Fragment>}
    </StrictMode>

  );
}

export default App;


