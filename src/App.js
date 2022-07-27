import React, { useState } from "react";
import "./App.css";

function App() {
  const [prev, setPrev] = useState("");
  const [cur, setCur] = useState("");
  const [operator, setOperator] = useState("");

  const inputNum = (e) => {
    if (cur.includes(".") && e.target.value === ".") return;
    cur ? setCur((prev) => prev + e.target.value) : setCur(e.target.value);
  };

  const handleOperator = (e) => {
    setOperator(e.target.value);
    if (cur === "") return;
    if (prev !== "") calculate();
    else {
      setPrev(cur);
      setCur("");
    }
  };

  const calculate = () => {
    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(prev) / parseFloat(cur));
        break;

      case "+":
        cal = String(parseFloat(prev) + parseFloat(cur));
        break;
      case "X":
        cal = String(parseFloat(prev) * parseFloat(cur));
        break;
      case "-":
        cal = String(parseFloat(prev) - parseFloat(cur));
        break;
      default:
        return;
    }

    setPrev(cal);
    setCur("");
  };

  const reset = () => {
    setCur("");
    setPrev("");
    setOperator("");
  };
  const buttonsArray = [];
  for (let i = 0; i <= 9; i++) {
    buttonsArray.push(i);
  }
  buttonsArray.push(".");

  const ops = ["+", "-", "X", "/"];
  return (
    <div className="container glass">
      <div className="display">
        <span className="operator">{operator}</span>
        {cur ? (
          <div className="data-in"> {cur}</div>
        ) : (
          <div className="data-in"> {prev}</div>
        )}
      </div>
      <div className="buttons-num">
        <button value="AC" className="btn btn-pink" onClick={reset}>
          {" "}
          AC
        </button>
        {ops.map((el) => (
          <button value={el} className="btn" onClick={handleOperator}>
            {el}
          </button>
        ))}
        {buttonsArray.map((el) => (
          <button value={el} className="btn" onClick={inputNum}>
            {el}
          </button>
        ))}
        <button value="=" className="btn btn-pink" onClick={calculate}>
          {" "}
          =
        </button>
      </div>
    </div>
  );
}

// function App() {
//   const [string, setString] = useState("");
//   const [result, setResult] = useState("");
//   const buttonArray = [];

//   const operations = ["+", "-", "*", "/"];
//   for (let i = 0; i < 10; i++) {
//     buttonArray.push(i);
//   }

//   for (let operation of operations) buttonArray.push(operation);
//   buttonArray.push(".");
//   const handleClick = (e) => {
//     setString( prev => prev + e.target.value);
//   };
//   const calculate = () => {
//       setResult(eval(string));
//       setString("");
//   }

//   return (
//     <div className="App">
//       {buttonArray.map((el, idx) => (
//         <button key={idx} value={el} onClick={handleClick}>
//           {el}
//         </button>
//       ))}
//       <button onClick={calculate} value = "=" >=</button>
//       <div>{string}</div>
//       <div>{result}</div>
//     </div>
//   );
// }

export default App;
