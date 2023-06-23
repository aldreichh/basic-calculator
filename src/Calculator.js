import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setResult('');
  };

  return (
    <div className="mt-20 w-96 m-auto rounded-xl shadow-2xl">
      <div className="bg-slate-400 text-right rounded-t-xl shadow-2xl">
        <input className="p-4 h-16 w-96  text-right text-4xl text-slate-900 placeholder-slate-900" placeholder = "0"type="text" value={result}  disabled/>
      </div>
      <div className="grid grid-cols-4 grid-rows-4 gap-0 text-2xl h-96">
        <button className="bg-slate-800 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4 " name="7" onClick={handleClick}>
          7
        </button>
        <button className="bg-slate-800 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4" name="8" onClick={handleClick}>
          8
        </button>
        <button className="bg-slate-800 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4" name="9" onClick={handleClick}>
          9
        </button>
        <button className="bg-slate-800 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4operator" name="+" onClick={handleClick}>
          +
        </button>
        <button className="bg-slate-800 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4" name="4" onClick={handleClick}>
          4
        </button>
        <button className="bg-slate-800 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4" name="5" onClick={handleClick}>
          5
        </button>
        <button className="bg-slate-800 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4" name="6" onClick={handleClick}>
          6
        </button>
        <button className="bg-slate-800 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4" name="*" onClick={handleClick}>
          ×
        </button>
        <button className="bg-slate-800 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4" name="1" onClick={handleClick}>
          1
        </button>
        <button className="bg-slate-800 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4" name="2" onClick={handleClick}>
          2
        </button>
        <button className="bg-slate-800 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4" name="3" onClick={handleClick}>
          3
        </button>
        <button className="bg-slate-800 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4" name="-" onClick={handleClick}>
          -
        </button>
        <button className="bg-slate-800 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4 rounded-bl-xl" name="0" onClick={handleClick}>
          0
        </button>
        <button className="bg-slate-800 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4" name="." onClick={handleClick}>
          .
        </button>
        <button className="bg-slate-800 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4" onClick={clear}>
          C
        </button>
        <button className="bg-slate-800 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-4 rounded-br-xl" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
