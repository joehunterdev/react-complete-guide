import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Input = React.forwardRef((props, ref) => {
  return (
      <input  className="form-control form-control-sm" ref={ref} {...props.input} />
  );
});

export default Input;