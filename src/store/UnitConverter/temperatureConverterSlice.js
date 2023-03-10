import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputUnit: 'C',
  inputValue: '',
  outputUnit: 'K',
  outputValue: '',
};

export const temperatureConverterSlice = createSlice({
  name: 'temperatureConverter',
  initialState,
  reducers: {
    setInputUnit: (state, action) => {
      state.inputUnit = action.payload;
      
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setOutputUnit: (state, action) => {
      state.outputUnit = action.payload;
    },
    setOutputValue: (state) => {
      state.outputValue = convertTemperature(state)
      
    },

  },
});

function convertTemperature({ inputUnit, outputUnit, inputValue, outputValue }) {
  let inputVal = parseFloat(inputValue);
  let outputVal = parseFloat(outputValue);
  switch (`${inputUnit}-${outputUnit}`) {
    case 'C-F':
      outputVal = inputVal * 1.8 + 32;
      break;
    case 'C-K':
      outputVal = inputVal + 273.15;
      break;
    case 'F-C':
      outputVal = (inputVal - 32) / 1.8;
      break;
    case 'F-K':
      outputVal = (inputVal + 459.67) / 1.8;
      break;
    case 'K-F':
      outputVal = (inputVal - 273.15) * 1.8 + 32;
      break;
    case 'K-C':
      outputVal = inputVal - 273.15;
      break;

    default:
      outputVal = inputVal;
  }

  return outputVal.toString()
}




export const { setInputUnit, setInputValue, setOutputUnit, setOutputValue } = temperatureConverterSlice.actions;

export default temperatureConverterSlice.reducer;
