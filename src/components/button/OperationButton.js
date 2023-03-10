import React from 'react';
import classes from './Button.module.css';

const OperationButton = ({value, onClick}) => {
  return (
    <>
    <button className={classes.button_operation} onClick={() => onClick(value)}>{value}</button>
    </>
  )
}

export default OperationButton