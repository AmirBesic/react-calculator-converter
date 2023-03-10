import React from 'react'
import { setInputUnit, setInputValue, setOutputUnit, setOutputValue } from '../../store/UnitConverter/areaConverterSlice';
import { useDispatch, useSelector } from 'react-redux';
import classes from './UnitConverter.module.css';

const AreaConverter = () => {
  const inputValue = useSelector((state) => state.areaConverter.inputValue);
  const inputUnit = useSelector((state) => state.areaConverter.inputUnit);
  const outputValue = useSelector((state) => state.areaConverter.outputValue);
  const outputUnit = useSelector((state) => state.areaConverter.outputUnit);
  const dispatch = useDispatch();


  const handleInputChange = (e) => {
    dispatch(setInputValue(e.target.value));
    dispatch(setOutputValue());
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
        <h1 className={classes.heading}>Area Converter</h1>
        <div className={classes.form}>
          <label>From</label>
          <input className={classes.input} value={inputValue} onChange={handleInputChange} />
          <select value={inputUnit} onChange={handleInputUnitChange}>
            <option value="square meters">Square Meters</option>
            <option value="square centimeters">Square Centimeters</option>
            <option value="square kilometers">Square Kilometers</option>
            <option value="square millimeters">Square Millimeters</option>
          </select>
        </div>
        <div className={classes.form}>
          <label>To</label>
          <input className={classes.input} value={outputValue} readOnly />
          <select value={outputUnit} onChange={handleOutputUnitChange}>
            <option value="square meters">Square Meters</option>
            <option value="square centimeters">Square Centimeters</option>
            <option value="square kilometers">Square Kilometers</option>
            <option value="square millimeters">Square Millimeters</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default AreaConverter