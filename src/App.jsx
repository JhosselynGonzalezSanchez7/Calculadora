import { useState } from 'react';
import './App.css'

const buttonsClasses = "btn btn-primary w-75";

function App() {
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
console.log ({numero1});

if (limpiarpantalla){
  console.log('cambia pantalla');
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
  const operador = e.target.value;
  switch (operador) {
    case '+':
      setNumero1 (pantalla);
      console.log ('suma');
      break;
  
    default:
      break;
  }
  setLimpiarPantalla(true);
}
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
      <tr>
      <td> 
        <button 
        type= "button"
        className={buttonsClasses}
        value="C"
        onClick={(e) => handleButtonClick(e)}
        > C </button>
      </td>
      <td>
        <button 
        type= "button"
        className={buttonsClasses}
        > / </button>
      </td>
      <td> 
        <button 
        type= "button"
        className={buttonsClasses}
        > * </button>          
      </td>
      <td> 
        <button 
        type= "button"
        className={buttonsClasses}
        > - </button>  
      </td>
      </tr>
      {/* Third row */}
      <tr>
      <td>
        <button 
        type= "button"
        className={buttonsClasses}
        value="7"
        onClick={(e) => handleButtonClick(e)}
      
        > 7 </button>
      </td>
      <td>
        <button 
        type= "button"
        className={buttonsClasses}
        value="8"
        onClick={(e) => handleButtonClick(e)}
        > 8 </button>
      </td>
      <td> 
        <button 
        type= "button"
        className={buttonsClasses}
        value="9"
        onClick={(e) => handleButtonClick(e)}
        > 9 </button>
      </td>
      <td 
      rowSpan={2}>
        <button 
        type= "button"
        className={buttonsClasses}
        style={{height: "80px"}}
        value = "+"
        onClick ={(e) =>handleOperationButtonClick (e)}
        > + </button>            
      </td>
      </tr>
      {/* Fourth row */}
      <tr>
      <td> 
        <button 
        type= "button"
        className={buttonsClasses}
        value="4"
        onClick={(e) => handleButtonClick(e)}
        > 4 </button>   
      </td>
      <td> 
        <button 
        type= "button"
        className={buttonsClasses}
        value="5"
        onClick={(e) => handleButtonClick(e)}
        > 5 </button>            
      </td>
      <td>
        <button 
        type= "button"
        className={buttonsClasses}
        value="6"
        onClick={(e) => handleButtonClick(e)}
        > 6 </button>
      </td>
      </tr>
      {/* Firth row */}
      <tr>
      <td> 
        <button 
        type= "button"
        className={buttonsClasses}
        value="1"
        onClick={(e) => handleButtonClick(e)}
        > 1 </button> 
      </td>
      <td>
        <button 
        type= "button"
        className={buttonsClasses}
        value="2"
        onClick={(e) => handleButtonClick(e)}
        > 2 </button>
      </td>
      <td>
        <button 
        type= "button"
        className={buttonsClasses}
        value="3"
        onClick={(e) => handleButtonClick(e)}
        > 3 </button>
      </td>
      <td rowSpan={2}>
        <button 
        type= "button"
        className={buttonsClasses}
        style={{height: "80px"}}
        > = </button>
      </td>
      </tr>
      {/* Sixth row */}
      <tr>
      <td>
        <button 
        type= "button"
        className={buttonsClasses}
        onClick = {handleDelButtonClick}
        >{'DEL'}</button>
      </td>
      <td>
        <button 
        type= "button"
        className={buttonsClasses}
        value="0"
        onClick={(e) => handleButtonClick(e)}
        > 0 </button>
      </td>
      <td>
        <button 
        type= "button"
        className={buttonsClasses}
        value="."
        onClick={(e) => handleButtonClick(e)}
        > . </button>
        </td>
        </tr>
      </table>
    </div>
  )
}

export default App