import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputUnit: 'square meters',
  inputValue: '',
  outputUnit: 'square kilometers',
  outputValue: '',
};

export const areaConverterSlice = createSlice({
  name: 'areaConverter',
  initialState,
  reducers: {
    setInputUnit: (state, action) => {
      state.inputUnit = action.payload;
    },
    setInputValue: (state, action) => {
      if (state.inputValue === '') {
        state.outputValue = '';
      }
      state.inputValue = action.payload;
      console.log(state.inputValue)

    },
    setOutputUnit: (state, action) => {
      state.outputUnit = action.payload;
    },
    setOutputValue: (state) => {
      if (state.inputValue === null) {
        state.outputValue = null
      }
      state.outputValue = convertArea(state)

    },

  },
});

function convertArea({ inputUnit, outputUnit, inputValue, outputValue }) {
  let inputVal = parseFloat(inputValue);
  let outputVal = parseFloat(outputValue);
  switch (`${inputUnit}-${outputUnit}`) {
    case 'square meters-square kilometers':
      outputVal = inputVal / 1000000;
      break;
    case 'sqaure meters-square centimeters':
      outputVal = inputVal * 100 * 100;
      break;
    case 'square meters-square millimeters':
      outputVal = inputVal * 1000 * 1000;
      break;
    case 'square kilometers-square meters':
      outputVal = inputVal * 1000000;
      break;
    case 'square kilometers-square centimeters':
      outputVal = inputVal * 10000000000;
      break;
    case 'square kilometers-square millimeters':
      outputVal = inputVal * 1000000 * 1000000;
      break;
    case 'square centimeters-square meters':
      outputVal = inputVal / 10000;
      break;
    case 'square centimeters-square kilometers':
      outputVal = inputVal / 10000000000;
      break;
    case 'square centimeters-square millimeters':
      outputVal = inputVal * 10 * 10;
      break;
    default:
      outputVal = inputVal;
  }

  return outputVal.toString()
}




export const { setInputUnit, setInputValue, setOutputUnit, setOutputValue } = areaConverterSlice.actions;

export default areaConverterSlice.reducer;
