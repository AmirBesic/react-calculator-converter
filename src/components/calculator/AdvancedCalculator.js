import React from 'react';
import classes from './AdvancedCalculator.module.css';
import { useDispatch } from 'react-redux';
import OperationButton from '../button/OperationButton';
import { calculatorActions } from '../../store/Calculator/calculatorSlice';

const AdvancedCalculator = () => {

  const dispatch = useDispatch();
  const calculateHandler = (value) => {
    dispatch(calculatorActions.calculateTrig(value))
    

  }
  return (
    <>
      <div className={classes.advanced_cal}>
        <div className={classes.advanced_cal_screen}></div>
        <div className={classes.advanced_cal_keypad}>
          <OperationButton value="sin" onClick={calculateHandler} />
          <OperationButton value="π" onClick={calculateHandler} />
          <OperationButton value="cos" onClick={calculateHandler} />
          <OperationButton value="log" onClick={calculateHandler} />
          <OperationButton value="tan" onClick={calculateHandler} />
          <OperationButton value="√" onClick={calculateHandler} />
          <OperationButton value="x!" onClick={calculateHandler} />
          <OperationButton value="x²" onClick={calculateHandler} />
        </div>
      </div>
    </>
  )
}

export default AdvancedCalculator