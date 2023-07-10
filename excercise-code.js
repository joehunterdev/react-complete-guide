//4.7 https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/quiz/5775588#reviews
import React from 'react';
import './styles.css';

// don't change the Component name "App"
export default function App() {
    
    const [inputMessage,setInputMessage] = React.useState('');
    
    const props.feedback = ''  //Likely a ref error 
    
    const validateMessageHandler(event){
        
        if (event.value.trim().length < 3) {
            
           feedback = "Invalid message";
           
        } else {
            
           feedback = "Valid message";
           
        }

    }
    
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={validateMessageHandler} />
            <p>{props.feedback}</p>
        </form>
    );
}


////////////////4.8
import React from 'react';
import './styles.css';

// don't change the Component name "App"
export default function App(event,props) {
    
    const [inputAmount,setInputCounter] = React.useState(0);
    
    let counter = inputAmount;
    
    const incCounterHandler = () => {
 
        setInputCounter(prevCounter => prevCounter + 1);
    };
    
    return (
      <div>
        <p id="counter">{counter}</p>
        <button onClick={incCounterHandler}>Increment</button>
      </div>
    );
}
