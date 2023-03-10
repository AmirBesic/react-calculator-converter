import React, { useState } from 'react'
import Calculator from './components/calculator/Calculator';
import UnitConverters from './components/unitConverter/UnitConverters';
import './styles.css';


const App = () => {
  const [showUnitConverter, setShowUnitConverter] = useState(false);
  const [showCalculator, setShowCalculator] = useState(true);

  const showCalculatorHandler = () => {
    setShowCalculator(true);
    setShowUnitConverter(false);
  }
  const showUnitConverterHandler = () => {
    setShowCalculator(false);
    setShowUnitConverter(true);
  }
  return (
    <React.Fragment>
      <button type='button' className='button' onClick={showCalculatorHandler}>Calculator</button>
      <button type='button' className='button' onClick={showUnitConverterHandler}>Unit Converter</button>
      {showCalculator && <Calculator />}
      {showUnitConverter && <UnitConverters />}
    </React.Fragment>
  )
}

export default App
