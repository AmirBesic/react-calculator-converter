

import { createSlice } from '@reduxjs/toolkit';

const initialLengthConverterState = {
  inputValue: '',
  inputUnit: 'm',
  outputValue: '',
  outputUnit: 'cm',
}

const lengthConverterSlice = createSlice({
  name: 'lengthConverter',
  initialState: initialLengthConverterState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setInputUnit: (state, action) => {
      state.inputUnit = action.payload;
    },
    setOutputValue: (state) => {

      state.outputValue = convert(state);

    },
    setOutputUnit: (state, action) => {
      state.outputUnit = action.payload;
    },

  },
});
function convert({ inputUnit, outputUnit, inputValue, outputValue }) {
  let inputVal = parseFloat(inputValue);
  let outputVal = parseFloat(outputValue);

  switch (`${inputUnit}-${outputUnit}`) {
    case 'm-cm':
      outputVal = inputVal * 100;
      break;
    case 'cm-m':
      outputVal = inputVal / 100;
      break;
    case 'm-km':
      outputVal = inputVal * 0.001;
      break;
    case 'km-m':
      outputVal = inputVal * 1000;
      break;
    case 'm-mm':
      outputVal = inputVal * 1000;
      break;
    case 'mm-m':
      outputVal = inputVal * 0.001;
      break;
    case 'cm-mm':
      outputVal = inputVal * 10;
      break;
    case 'mm-cm':
      outputVal = inputVal * 0.1;
      break;
    case 'km-cm':
      outputVal = inputVal * 100 * 1000;
      break;
    case 'cm-km':
      outputVal = inputVal * 0.001 * 0.01;
      break;
    case 'mm-km':
      outputVal = inputVal * 0.001 * 0.01 * 0.01;
      break;
    case 'km-mm':
      outputVal = inputVal * 1000 * 100 * 100;
      break;
    default:
      outputVal = inputVal;
  }
  return outputVal.toString()
}

export const {
  setInputValue,
  setInputUnit,
  setOutputValue,
  setOutputUnit,
} = lengthConverterSlice.actions;

export default lengthConverterSlice.reducer