import React from 'react'
import { useState } from 'react';
import AreaConverter from './AreaConverter';
import LengthConverter from './LengthConverter';
import TemperatureConverter from './TemperatureConverter';
import '../../styles.css'


const UnitConverters = () => {
  const [showLengthConverter, setShowLengthConverter] = useState(true);
  const [showAreaConverter, setShowAreaConverter] = useState(false);
  const [showTemperatureConverter, setShowTemperatureConverter] = useState(false);


  const showLengthConverterHandler = () => {
    setShowLengthConverter(true);
    setShowTemperatureConverter(false)
    setShowAreaConverter(false)

  };
  const showTemperatureConverterHandler = () => {
    setShowTemperatureConverter(true);
    setShowLengthConverter(false);
    setShowAreaConverter(false)
  }
  const showAreaConverterHandler = () => {
    setShowAreaConverter(true);
    setShowLengthConverter(false);
    setShowTemperatureConverter(false);
  }




  return (
    <>
      <div>
        <button className='button' onClick={(showLengthConverterHandler)}>Length</button>
        <button className='button' onClick={showAreaConverterHandler}>Area</button>
        <button className='button' onClick={showTemperatureConverterHandler}>Temperature</button>

      </div>

      {showLengthConverter && <LengthConverter />}
      {showAreaConverter && <AreaConverter />}
      {showTemperatureConverter && <TemperatureConverter />}
    </>
  )
}

export default UnitConverters