import classes from './Header.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { authActions } from '../store';
//Todo: if logged in 
const Header = () => {

  const dispatch = useDispatch()

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.logout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
