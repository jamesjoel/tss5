import React, { useState } from 'react';

const Calculator = () => {
    const [screenValue, setScreenValue] = useState('');

    const handleButtonClick = (btntext) => {
        if (btntext === '×') {
            btntext = '*';
        }

        if (btntext === '÷') {
            btntext = '/';
        }

        setScreenValue(screenValue + btntext);
    };

    const sin = () => setScreenValue(Math.sin(screenValue));
    const cos = () => setScreenValue(Math.cos(screenValue));
    const tan = () => setScreenValue(Math.tan(screenValue));
    const pow = () => setScreenValue(Math.pow(screenValue, 2));
    const sqrt = () => setScreenValue(Math.sqrt(screenValue, 2));
    const log = () => setScreenValue(Math.log(screenValue));
    const pi = () => setScreenValue(3.14159265359);
    const e = () => setScreenValue(2.71828182846);

    return (
        <div className="container">
            <div className="btns">
            <div className="row">
                    <button id="ce">CE</button>
                    <button >x!</button>
                    <button className="btn" onClick={() => handleButtonClick('(')}>(</button>
                    <button className="btn" onClick={() => handleButtonClick(')')}>)</button>
                    <button className="btn" onClick={() => handleButtonClick('%')}>%</button>
                    <button id="ac" onClick={() => setScreenValue('')}>AC</button>
                </div>
                <div className="row">
                    <button onClick={sin}>sin</button>
                    <button onClick={pi}>π</button>
                    <button className="btn" onClick={() => handleButtonClick('7')}>7</button>
                    <button className="btn" onClick={() => handleButtonClick('8')}>8</button>
                    <button className="btn" onClick={() => handleButtonClick('9')}>9</button>
                    <button className="btn" onClick={() => handleButtonClick('÷')}>÷</button>
                </div>

                <div className="row">
                    <button onClick={cos}>cos</button>
                    <button onClick={log}>log</button>
                    <button className="btn" onClick={() => handleButtonClick('4')}>4</button>
                    <button className="btn" onClick={() => handleButtonClick('5')}>5</button>
                    <button className="btn" onClick={() => handleButtonClick('6')}>6</button>
                    <button className="btn" onClick={() => handleButtonClick('×')}>×</button>
                </div>

                <div className="row">
                    <button onClick={tan}>tan</button>
                    <button onClick={sqrt}>√</button>
                    <button className="btn" onClick={() => handleButtonClick('1')}>1</button>
                    <button className="btn" onClick={() => handleButtonClick('2')}>2</button>
                    <button className="btn" onClick={() => handleButtonClick('3')}>3</button>
                    <button className="btn" onClick={() => handleButtonClick('-')}>-</button>
                </div>

                <div className="row">
                    <button onClick={e}>e</button>
                    <button onClick={pow}>
                        x
                        <span style={{ position: 'relative', bottom: '.4em', right: '.1em' }}>y</span>
                    </button>
                    <button className="btn" onClick={() => handleButtonClick('0')}>0</button>
                    <button className="btn" onClick={() => handleButtonClick('.')}>.</button>
                    <button id="eval" onClick={() => setScreenValue(eval(screenValue))}>=</button>
                    <button className="btn" onClick={() => handleButtonClick('+')}>+</button>
                </div>

            </div>
        </div>
    );
};

export default Calculator;

// <style>
//     body {
//         padding: 0;
//         margin: 0;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         min-height: 100vh;
//         user-select: none;
//         background: #ecf0f3;
//     }

//     .container {
//         margin-left: 1.8em;
//         padding: 20px;
//         border-radius: 8px;
//         box-shadow: 13px 13px 20px #cbced1,
//             -13px -13px 20px #ffffff;
//     }

//     .content {
//         width: 100%;
//         margin-top: 1.7em;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;
//     }

//     .row button {
//         width: 60px;
//         height: 30px;
//         font-size: 16px;
//         border: none;
//         outline: none;
//         margin: 5px;
//         border-radius: 4px;
//         transition: .1s;
//         box-shadow: 5px 5px 8px #00000020,
//             -5px -5px 8px #ffff;
//     }

//     .row button:hover {
//         box-shadow: inset 5px 5px 8px rgba(16, 16, 16, .1),
//             inset -5px -5px 8px #fff;
//         background: #fff;
//     }

//     .display #screen {
//         margin-bottom: .5em;
//         width: auto;
//         height: 70px;
//         font-size: 35px;
//         outline: none;
//         border: none;
//         text-align: right;
//         padding-right: .5em;
//         background: #ecf0f3;
//         border-radius: 6px;
//         box-shadow: inset 8px 8px 8px #cbced1,
//             inset -8px -8px 8px #ffffff;
//     }

//     #eval {
//         background: #33ccff;
//         color: #fff;
//         box-shadow: inset 5px 5px 8px #66d9ff,
//             inset -5px -5px 8px #00ace6;
//     }

//     #eval:hover {
//         box-shadow: inset 5px 5px 8px #00ace6,
//             inset -5px -5px 8px #00ace6;
//     }

//     #ac {
//         background: #33cc33;
//         color: #fff;
//     }

//     #ac:hover {
//         box-shadow: inset 5px 5px 8px #2eb82e,
//             inset -5px -5px 8px #33cc33;
//     }

//     #ce {
//         background: #ff3399;
//         color: #fff;
//     }

//     #ce:hover {
//         box-shadow: inset 5px 5px 8px #e60073,
//             inset -5px -5px 8px #ff3399;
//     }
// </style>

