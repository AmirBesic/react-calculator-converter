import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { calculatorActions } from '../../store/Calculator/calculatorSlice';
import AdvancedCalculator from './AdvancedCalculator';
import OperationButton from '../button/OperationButton';
import NumButton from '../button/NumButton';
import classes from './Calculator.module.css';



const Calculator = () => {
  const dispatch = useDispatch();
  const firstOperand = useSelector((state) => state.calculator.firstOperand);
  const secondOperand = useSelector((state) => state.calculator.secondOperand);
  const result = useSelector((state) => state.calculator.result);
  const operation = useSelector((state) => state.calculator.operation);

  const [advancedCalculator, setAdvancedCalculator] = useState(false);

  const addOperandHandler = (value) => {
    dispatch(calculatorActions.addNumber(value))
    console.log(value)

  }
  const addOperationHandler = (value) => {
    dispatch(calculatorActions.addOperation(value))
    console.log(value)
  }
  const clearHandler = () => {
    dispatch(calculatorActions.clear())
  }
  const backspaceHandler = () => {
    dispatch(calculatorActions.backspace())
  }
  const calculate = () => {

    dispatch(calculatorActions.calculate())

  }
  const advancedHandler = () => {
    setAdvancedCalculator(!advancedCalculator)
  }
  const basicHandler = () => {
    setAdvancedCalculator(false)
  }
  const calculatePercentHandler = () => {
    dispatch(calculatorActions.percent())
  }
  const invertHandler = () => {
    dispatch(calculatorActions.invert())
  }

  //  const [resultHistory, setResultHistory] = useState([]);

  //  useEffect(() => {
  //   const resultHistory = localStorage.getItem('calculator');
  //   setResultHistory(resultHistory)
  // }, [result]);
  return (
    <>
      <div className={classes.app}>
        {/* <div className={classes.history}>{resultHistory}</div> */}
        {advancedCalculator && <AdvancedCalculator />}
        <div className={classes.calculator}>
          <div className={classes.screen}>
            <div className={classes.navbar}>
              <button className={classes.navbar_btn} onClick={basicHandler}>Standard</button>
              <button className={classes.navbar_btn} onClick={advancedHandler}>Scientific</button>

            </div>
            <div className={classes.screen_history}>{result}</div>
            <div className={classes.screen_result}>{secondOperand}{operation}</div>
            <div className={classes.screen_operand}>{firstOperand}</div>
          </div>

          <div className={classes.keypad}>
            <OperationButton value='C' onClick={clearHandler} />
            <OperationButton value='Del' onClick={backspaceHandler} />
            <OperationButton value='%' onClick={calculatePercentHandler} />
            <OperationButton value='/' onClick={addOperationHandler} />
            <NumButton value='7' onClick={addOperandHandler} />
            <NumButton value='8' onClick={addOperandHandler} />
            <NumButton value='9' onClick={addOperandHandler} />
            <OperationButton value='*' onClick={addOperationHandler} />
            <NumButton value='4' onClick={addOperandHandler} />
            <NumButton value='5' onClick={addOperandHandler} />
            <NumButton value='6' onClick={addOperandHandler} />
            <OperationButton value='-' onClick={addOperationHandler} />
            <NumButton value='1' onClick={addOperandHandler} />
            <NumButton value='2' onClick={addOperandHandler} />
            <NumButton value='3' onClick={addOperandHandler} />
            <OperationButton value='+' onClick={addOperationHandler} />
            <OperationButton value='+/-' onClick={invertHandler} />
            <NumButton value='0' onClick={addOperandHandler} />
            <NumButton value='.' onClick={addOperandHandler} />
            <button value='=' className={classes.eval} onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Calculator;