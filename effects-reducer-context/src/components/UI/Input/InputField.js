import React,{useRef,useImperativeHandle, forwardRef} from "react";
import classes from './InputField.module.css'

//create a reuseable input component
//contains divs and recieves props
//import it into form

const InputField = forwardRef(({ value, label, name, placeholder, type, onChange,onBlur},ref) => {
    const inputRef = useRef();

    //actually called from outside
    const activate = () => {
      if (!inputRef.current) { return; }

      inputRef.current.focus();
    }
    //called externally 
    useImperativeHandle(ref,()=>{
      return {focus:activate}
    })

    return(
        <React.Fragment>
        <div className={`${classes.control} ${value.isValid === false ? value.invalid : ""}`}>
        {label && <label htmlFor="input-field">{label}</label>}
          <input
            ref={activate}
            type={type}
            id={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
         </React.Fragment>
    )
})
export default InputField