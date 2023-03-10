import { createSlice } from '@reduxjs/toolkit';


const initialCalculatorState = {
  firstOperand: '',
  operation: '',
  secondOperand: '',
  result: ''
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: initialCalculatorState,
  reducers: {
    addNumber(state, action) {
      const operand = action.payload

      if (operand === "0" && state.firstOperand === "0") {
        return state
      }
      if (operand === "." && state.firstOperand.includes(".")) {
        return state
      }

      state.firstOperand = `${state.firstOperand || ""}${operand}`

    },
    addOperation(state, action) {
      const value = action.payload;
      console.log(value)
      if (state.firstOperand === '' && state.secondOperand === '') {
        return;
      }
      if (state.secondOperand === '') {
        state.operation = value;
        state.secondOperand = state.firstOperand;
        state.firstOperand = '';

      }
      if (state.firstOperand === '' && state.secondOperand !== '') {
        state.operation = value
      }
      if (state.firstOperand !== '' && state.secondOperand !== '') {
        state.secondOperand = evaluate(state)
        state.firstOperand = '';
        state.operation = value;
      }



    },
    percent(state) {
      if (state.firstOperand === '' && state.secondOperand !== '') {
        state.secondOperand = state.secondOperand / 100;
        state.operation = '';
      }
      if (state.firstOperand !== '' && state.secondOperand === '') {
        state.secondOperand = state.firstOperand / 100
      }
    },
    advancedCalculate(state, action) {
      if (state.firstOperand === '' && state.secondOperand === '') {
        return state
      }

      if (state.firstOperand !== '' && state.secondOperand === '') {

        state.operation = action.payload;
      }


    },
    clear(state) {
      state.secondOperand = '';
      state.operation = '';
      state.firstOperand = '';
      state.result = '';
    },
    backspace(state) {

      if (state.firstOperand === '' && state.operation === '' && state.secondOperand !== '') {
        state.secondOperand = state.secondOperand.slice(0, -1);
      }
      if (state.firstOperand === '' && state.operation !== '') {
        state.operation = state.operation.slice(0, -1);
      }
      state.firstOperand = state.firstOperand.slice(0, -1);
    },
    invert(state) {
      if (state.firstOperand !== '') {
        state.firstOperand = state.firstOperand * -1
      }
      if (state.firstOperand === '' && state.secondOperand !== '') {
        state.secondOperand = state.secondOperand * -1
      }
    },
    calculateTrig: (state, action) => {
      const inputValue = parseFloat(state.firstOperand);
      const secondValue = parseFloat(state.secondOperand)
      let outputValue;

      switch (action.payload) {
        case 'sin':
          outputValue = Math.sin(inputValue ? inputValue : secondValue);
          console.log(outputValue)
          break;
        case 'cos':
          outputValue = Math.cos(inputValue ? inputValue : secondValue);
          break;
        case 'tan':
          outputValue = Math.tan(inputValue ? inputValue : secondValue);
          break;
        case '√':
          outputValue = Math.sqrt(inputValue ? inputValue : secondValue);
          break;
        case 'x!':
          outputValue = 1;
          for (let i = inputValue; i > 1; i--) {
            outputValue *= i;
          }
          break;
        case 'x²':
          inputValue ? outputValue = Math.pow(inputValue, 2) : outputValue = Math.pow(secondValue, 2);
          break;
        default:
          outputValue = inputValue;
      }
      state.secondOperand = outputValue.toString();
      state.firstOperand = '';
      state.operation = null;
    },
    calculate(state) {
      try {

        state.secondOperand = evaluate(state);
        state.firstOperand = '';
        state.operation = '';
      } catch (error) {

        state.firstOperand = 'Error'

      }
    }
  }
});

function evaluate({ firstOperand, secondOperand, operation }) {
  const prev = parseFloat(secondOperand)
  const current = parseFloat(firstOperand)
  console.log(current, operation)
  if (isNaN(prev) || isNaN(current)) return ""
  let result = '';
  switch (operation) {
    case "+":
      result = prev + current;

      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;


    default:
      result = current ? current : prev;


  }
  return result.toString()
}


export const calculatorActions = calculatorSlice.actions;

export default calculatorSlice.reducer;

