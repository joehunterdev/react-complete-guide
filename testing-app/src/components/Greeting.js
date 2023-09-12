import {useState} from 'react'

const Greeting = () => {
    const [changedText, setChangedText] = useState(false);
    const changeTextHandler = () => {
        setChangedText(true);
    }
    
    return (
        <div> 
            <h2>Hello world!</h2>
            {!changedText && <p>Its good to see you</p>}
            {changedText &&  <p>Changed!</p>}
            <button onClick={changeTextHandler}>Submit</button>
        </div>
    )
}

export default Greeting;