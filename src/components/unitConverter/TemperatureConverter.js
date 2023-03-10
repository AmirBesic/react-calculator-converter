import React from 'react'
import { setInputUnit, setInputValue, setOutputUnit, setOutputValue } from '../../store/UnitConverter/temperatureConverterSlice'
import { useDispatch, useSelector } from 'react-redux';
import classes from './UnitConverter.module.css';

const TemperatureConverter = () => {
  const inputValue = useSelector((state) => state.temperatureConverter.inputValue);
  const inputUnit = useSelector((state) => state.temperatureConverter.inputUnit);
  const outputValue = useSelector((state) => state.temperatureConverter.outputValue);
  const outputUnit = useSelector((state) => state.temperatureConverter.outputUnit);
  const dispatch = useDispatch();


  const handleInputChange = (e) => {
    dispatch(setInputValue(e.target.value));
    dispatch(setOutputValue())
  };

  const handleInputUnitChange = (e) => {
    dispatch(setInputUnit(e.target.value));
    dispatch(setOutputValue());
  };

  const handleOutputUnitChange = (e) => {
    dispatch(setOutputUnit(e.target.value));
    dispatch(setOutputValue());
  };
  return (
    <>
      <div className={classes.converter}>
        <h1 className={classes.heading}>Temperature Converter</h1>
        <div className={classes.form}>
          <label>From</label>
          <input className={classes.input} value={inputValue} onChange={handleInputChange} />
          <select value={inputUnit} onChange={handleInputUnitChange}>
            <option value="C">Celsius</option>
            <option value="K">Kelvin</option>

            <option value="F">Fahrenheit</option>
          </select>
        </div>
        <div className={classes.form}>
          <label>To</label>
          <input className={classes.input} value={outputValue} readOnly />
          <select value={outputUnit} onChange={handleOutputUnitChange}>
            <option value="C">Celsius</option>
            <option value="K">Kelvin</option>
            <option value="F">Fahrenheit</option>

          </select>
        </div>
      </div>
    </>
  )
}

export default TemperatureConverter