import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { store, authActions } from '../store/auth';
// import store from '../store'; 
//Todo:  action login

const Auth = () => {
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("dispatching")

    dispatch(authActions.login())
  }

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={submitHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
