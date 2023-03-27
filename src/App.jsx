import { useState } from 'react';
import './App.css'
import Button from './components/Button';

const buttonsClasses = "btn btn-primary w-75";

function App() {
  const [operador, setOperador] = useState('');
  const [numero1, setNumero1] = useState('');
  const [pantalla, setPantalla] = useState('0');
  const [limpiarpantalla, setLimpiarPantalla] = useState('0');

  const handleButtonClick = (e) =>{
const {value} = e.target;  
if (value === '.') {
  if (pantalla.includes('.'))
  return;
}

if (value === 'C') {
  setPantalla('0');
  return;
}
//===============================================
if (limpiarpantalla){
setPantalla(value);
setLimpiarPantalla(false);
return;
}

if (pantalla === '0'&& value !=='.') {
  setPantalla(value)
}else{
  setPantalla(`${pantalla}${value}`);
}
 }

const handleDelButtonClick = () => {
if (pantalla.length === 1){
  setPantalla('0')
  return
} 
setPantalla(pantalla.slice(0, -1));
}
const handleOperationButtonClick = (e) => {
  setOperador (e.target.value);
  setNumero1 (pantalla)
  setLimpiarPantalla(true);
}
const handleEqualButtonClick = () => {
  const a = + numero1;
  const b = + pantalla;  
  switch (operador) {
    case '+':
      setPantalla((a + b).toString());
      break;
      case '-':
      setPantalla((a - b).toString());
      break;
      case '*':
      setPantalla((a * b).toString());
      break;
      case '/':
      setPantalla((a / b).toString());
      break;
  
    default:
      break;
  }
}
const buttonsInfo = [
      [
        {
          classes: buttonsClasses,
          value: 'C',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '/',
          handleClick: handleOperationButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '*',
          handleClick: handleOperationButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '-',
          handleClick: handleOperationButtonClick,
          style: {},
          rows: 1
        },
      ],
      [
        {
          classes: buttonsClasses,
          value: '7',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '8',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '9',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '+',
          handleClick: handleOperationButtonClick,
          style: {height: "80px"},
          rows: 2
        },
      ],
      [
        {
          classes: buttonsClasses,
          value: '4',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '5',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '6',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
      ],
      [
        {
          classes: buttonsClasses,
          value: '1',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '2',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '3',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '=',
          handleClick: handleEqualButtonClick,
          style: {height: "80px"},
          rows: 2
        },
      ],
      [
        {
          classes: buttonsClasses,
          value: 'DEL',
          handleClick: handleDelButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '0',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
        {
          classes: buttonsClasses,
          value: '.',
          handleClick: handleButtonClick,
          style: {},
          rows: 1
        },
      ],
    ]
  return (
  <div className='app'>
    <h1 className='shadow-sm'><em>Calculadora</em></h1>
    <table>
      {/* First row */}
      <tr>
        <td colSpan={4} style={{
          border: "1px solid black",
          textAlign: "end"
          }}> 
        <h2>{pantalla}</h2>
        </td>
      </tr>
      {/* Second row */}
          {
            buttonsInfo.map((row) => {
              return (
                <tr>
                  {
                    row.map((cell) => {
                      return (
                        <td rowSpan={cell.rows}>
                        <Button
                        classes={cell.classes}
                        value={cell.value}
                        handleClick={cell.handleClick}
                        style={cell.style}
                        />
                      </td>
                      )
                    })
                  }
                </tr>
              )
            })
          }
        </table>
      </div>
    )
  }
  
  export default App