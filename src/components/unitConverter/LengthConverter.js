// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { converterActions } from '../../store/UnitConverter/LengthConverterSlice';

// import classes from './UnitConverter.module.css';

// const UnitConverter = (props) => {
//   const dispatch = useDispatch();
//   const inputValue = useSelector((state) => state.converter.inputValue);
//   const inputUnit = useSelector((state) => state.converter.inputUnit);
//   const outputUnit = useSelector((state) => state.converter.outputUnit);
//   const outputValue = useSelector((state) => state.converter.outputValue);

//   console.log(inputValue)
//   console.log(inputUnit)
//   console.log(outputValue)
//   console.log(outputUnit)


//   const inputChangeHandler = event => {
//     dispatch(converterActions.setInputValue(event.target.value));
//     dispatch(converterActions.convert());


//   };

//   const inputUnitChangeHandler = event => {
//     dispatch(converterActions.setInputUnit(event.target.value));
//     dispatch(converterActions.convert());
//     // console.log(event.target.value)
//   };

//   const outputUnitChangeHandler = event => {
//     dispatch(converterActions.setOutputUnit(event.target.value));
//     dispatch(converterActions.convert());
//     // dispatch(converterActions.co())
//     // console.log(event.target.value)
//   };


//   return (
//     <>

//       <div className={classes.converter}>
//         <h1 className={classes.heading}>Unit Converter</h1>

//         <div className={classes.form}>
//           <label>From</label>
//           <input type='number' value={inputValue} className={classes.input} onChange={inputChangeHandler} />
//           <select value={inputUnit} onChange={inputUnitChangeHandler}>
//             {props.inputUnit.map(unit => (
//               <option key={unit} value={unit}>{unit}</option>
//             ))}
//             {/* <option value="km">kilometers</option> */}
//             {/* <option value="k">centimeter</option> */}
//             {/* <option value="c">Celsius</option> */}
//           </select>
//         </div>
//         <div className={classes.form}>
//           <label>To</label>
//           <input className={classes.input} value={outputValue} readOnly />
//           <select value={outputUnit} onChange={outputUnitChangeHandler}>
//             {props.outputUnit.map(unit => (
//               <option key={unit} value={unit}>{unit}</option>
//             ))}
//             {/* <option value="km">kilometers</option> */}
//             {/* <option value="k">Kelvin</option> */}
//             {/* <option value="c">Celsius</option>  */}
//           </select>
//         </div>
//           {/* <button>Clear</button>
//         <button>Convert</button> */}
//       </div>
//     </>
//   )
// }

// export default UnitConverter

import React from 'react';
import { setInputValue, setInputUnit, setOutputUnit, setOutputValue } from '../../store/UnitConverter/lengthConverterSlice';
import { useSelector, useDispatch } from 'react-redux';


import classes from './UnitConverter.module.css';


const LengthConverter = () => {
  const inputValue = useSelector((state) => state.lengthConverter.inputValue);
  const inputUnit = useSelector((state) => state.lengthConverter.inputUnit);
  const outputValue = useSelector((state) => state.lengthConverter.outputValue);
  const outputUnit = useSelector((state) => state.lengthConverter.outputUnit);
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
        <h1 className={classes.heading}>Length Converter</h1>
        <div className={classes.form}>
          <label>From</label>
          <input className={classes.input} value={inputValue} onChange={handleInputChange} />
          <select value={inputUnit} onChange={handleInputUnitChange}>
            <option value="m">Meters</option>
            <option value="cm">Centimeters</option>
            <option value="km">Kilometers</option>
            <option value="mm">Millimeters</option>
          </select>
        </div>
        <div className={classes.form}>
          <label>To</label>
          <input className={classes.input} value={outputValue} readOnly />
          <select value={outputUnit} onChange={handleOutputUnitChange}>
            <option value="m">Meters</option>
            <option value="cm">Centimeters</option>
            <option value="km">Kilometers</option>
            <option value="mm">Millimeters</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default LengthConverter