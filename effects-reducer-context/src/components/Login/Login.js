import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";
import AuthContext from "../store/auth-context";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import InputField from "../UI/Input/InputField";

//Reducer func doesnt require anything from the component
const emailReducer = (state, action) => {
  // here we can now do our valid logic
  //updates everytime there is user input action

  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  if (action.type === "INPUT_BLUR") {
    //use last state snapshot
    return { value: state.value, isValid: state.value.includes("@") };
  }

  // here is the default returned if not
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  // here we can now do our valid logic
  //updates everytime there is user input action

  if (action.type === "PASSWORD_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }

  if (action.type === "PASSWORD__BLUR") {
    //use last state snapshot
    return { value: state.value, isValid: action.val.trim().length > 6 };
  }

  // here is the default returned if not
  return { value: "", isValid: false };
};
const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  //inital state
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });

  const authCtx = useContext(AuthContext);

  //destructuring to pull out the property store in const
  const { isValid: emailIsValid } = emailState.isValid;
  const { isValid: passwordIsValid } = passwordState.isValid;

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  //This is great for optimization essentialy if is valid stop running this code
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    //default
    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
    //finally return
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    //set the dispatch here
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    // setFormIsValid(
    //   event.target.value.includes("@") && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);
    dispatchPassword({ type: "PASSWORD_INPUT", val: event.target.value });

    setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    //setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(passwordState.value.trim().length > 6);
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <InputField
          ref={emailInputRef}
          type="email"
          value={emailState.value}
          placeholder="Email"
          label="Email"
          name="email"
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        ></InputField>

        <InputField
          ref={passwordInputRef}
          type="password"
          value={passwordState.value}
          placeholder="Password"
          label="Password"
          name="password"
          onChange={passwordChangeHandler}
        ></InputField>

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
