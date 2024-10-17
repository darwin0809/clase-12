import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Resultado from './Resultado';
import { Operaciones } from '../helpers/Operaciones';
import './Calculadora.css';

const NumberInput = props => {
  const [numeros, setnumeros] = useState({
    numero1: 0,
    numero2: 0
  });

  const { handleChange, suma, resta, multiplicacion, division, numero1, numero2 } = Operaciones(numeros, setnumeros);

  return (
    <div className="calculadora">
      <label htmlFor="">Número 1:
        <input name='numero1' value={numero1} onChange={handleChange} type='number' />
      </label>
      <br />
      <label htmlFor="">Número 2:
        <input name='numero2' value={numero2} onChange={handleChange} type='number' />
      </label>
      <br />
      <Resultado operacion="Suma" calculo={suma()} color="green" />
      <Resultado operacion="Resta" calculo={resta()} color="red" />
      <Resultado operacion="Multiplicación" calculo={multiplicacion()} color="blue" />
      <Resultado operacion="División" calculo={division()} color="orange" />
    </div>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string,
};

export default NumberInput;
