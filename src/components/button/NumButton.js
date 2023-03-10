import React from 'react';
import classes from './Button.module.css';

function Button({value, onClick }) {
  return (
    <button className={classes.button_number}  onClick={() => onClick(value)}>
      {value}
    </button>
  );
}

export default Button;