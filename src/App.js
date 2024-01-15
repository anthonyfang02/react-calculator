import './App.css';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(e) {
    setInputValue(parseInt(e.target.value));
  }

  function handleResetInput() {
    setInputValue('');
  }

  function handleOperation(operator) {
    if (inputValue !== '') {
      setAmount((prevAmount) => {
        const currentInput = parseFloat(inputValue);
        switch (operator) {
          case '+':
            return prevAmount + currentInput;
          case '-':
            return prevAmount - currentInput;
          case '*':
            return prevAmount * currentInput;
          case '/':
            return prevAmount / currentInput;
          default:
            return prevAmount;
        }
      });
    }
  }

  function handleResetResult() {
    setAmount(0);
  }

  return (
    <div className='App'>
      <h1>Simple Calculator</h1>
      <h2>{amount}</h2>
      <input
        type='number'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Enter a number'
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginTop: '16px',
        }}
      >
        <button type='button' onClick={() => handleOperation('+')}>
          Add
        </button>
        <button type='button' onClick={() => handleOperation('-')}>
          Subtract
        </button>
        <button type='button' onClick={() => handleOperation('*')}>
          Multiply
        </button>
        <button type='button' onClick={() => handleOperation('/')}>
          Divide
        </button>
        <button type='button' onClick={handleResetInput}>
          Reset Input
        </button>
        <button type='button' onClick={handleResetResult}>
          Reset Result
        </button>
      </div>
    </div>
  );
}

export default App;
