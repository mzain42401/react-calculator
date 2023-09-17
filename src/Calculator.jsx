import React, { useState } from 'react';

const Calculator = () => {
  const [mynum, setNum] = useState('');
  const [result, setResult] = useState('');


  const handleChange = (event) => {
    setNum(event.target.value);
  };

  const clicked = (uservalue) => {
    setNum((prevValue) => prevValue + uservalue);
  };

  const clearAll = () => {
    setNum('');
  };

  const calculate = () => {
    try {
      setResult(eval(mynum));
    } catch (error) {
      setResult('Error');
    }
  };

  const back=()=>{

    setNum(mynum.slice(0,-1))

  }

  return (
    <>
      <section className='calculatorSection'>
        <div className="heading">React Calculator</div>
        <div className="inputDiv">
          <div className="prevousValue"> {result}</div>
          <input
            value={mynum}
            onChange={handleChange}
            className='myinput'
            type="text"
          />
        </div>
        <div className="allbtnsDiv">
          <div onClick={clearAll} className='clear'>
            <button >C</button>
          </div>
          <div onClick={back} className='modulus'>
          <button >&larr;</button>

          </div>
          <div onClick={() => clicked('/')} className='divide'>
            <button >÷</button>
          </div>
          <div onClick={() => clicked('*')} className='multiple'>
            <button >×</button>
          </div>
          <div onClick={() => clicked('7')}>
            <button >7</button>
          </div>
          <div onClick={() => clicked('8')}>
            <button >8</button>
          </div>
          <div onClick={() => clicked('9')}>
            <button >9</button>
          </div>
          <div onClick={() => clicked('-')} className='minus'>
            <button >−</button>
          </div>
          <div onClick={() => clicked('4')}>
            <button >4</button>
          </div>
          <div onClick={() => clicked('5')}>
            <button >5</button>
          </div>
          <div onClick={() => clicked('6')}>
            <button >6</button>
          </div>
          <div onClick={() => clicked('+')} className='plus'>
            <button >+</button>
          </div>
          <div onClick={() => clicked('1')}>
            <button >1</button>
          </div>
          <div onClick={() => clicked('2')}>
            <button >2</button>
          </div>
          <div onClick={() => clicked('3')}>
            <button >3</button>
          </div>
          <div onClick={calculate} className='equalBtn'>
            <button >=</button>
          </div>
          <div onClick={() => clicked('00')}>
          <button >00</button>

          </div>
          <div>
            <button onClick={() => clicked('0')}>0</button>
          </div>
          <div>
            <button onClick={() => clicked('.')}>.</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calculator;









// import React, { useState } from 'react';

// function Calculator() {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState('');

//   const handleButtonClick = (value) => {
//     if (value === '=') {
//       try {
//         const calculatedResult = eval(input);
//         setResult(calculatedResult.toString());
//       } catch (error) {
//         setResult('Error');
//       }
//     } else if (value === 'C') {
//       setInput('');
//       setResult('');
//     } else {
//       setInput((prevInput) => prevInput + value);
//     }
//   };

//   const buttons = [
//     '7', '8', '9', '/',
//     '4', '5', '6', '*',
//     '1', '2', '3', '-',
//     '0', '.', '=', '+',
//   ];

//   return (
//     <div className="calculator">
//       <div className="display">
//         <input type="text" value={input} readOnly />
//         <div className="result">{result}</div>
//       </div>
//       <div className="buttons">
//         {buttons.map((button) => (
//           <button
//             key={button}
//             onClick={() => handleButtonClick(button)}
//           >
//             {button}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Calculator;
