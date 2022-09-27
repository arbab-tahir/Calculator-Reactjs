import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import { useState } from "react";
import { evaluate } from "mathjs";
import * as math from "mathjs";

const App = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const addText = (val) => {
    setText((text) => [...text, val + ""]);
  };

  const clearInput = () => {
    setText("");
    setResult("");
  };

  const calcResult = () => {
    const equalResult = text.join("");
    setResult(math.evaluate(equalResult));
  };

  // Btn-Colors
  const btnColor = "#9CC36B";
  const clearBtnColor = "#6DC2D3";

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result} />

        {/* Calc 1st-row */}

        <div className="row">
          <Button symbol="9" handleClick={addText} />
          <Button symbol="8" handleClick={addText} />
          <Button symbol="7" handleClick={addText} />
          <Button symbol="/" color={btnColor} handleClick={addText} />
        </div>

        {/* Calc 2nd-row */}

        <div className="row">
          <Button symbol="4" handleClick={addText} />
          <Button symbol="5" handleClick={addText} />
          <Button symbol="6" handleClick={addText} />
          <Button symbol="*" color={btnColor} handleClick={addText} />
        </div>

        {/* Calc 3rd-row */}

        <div className="row">
          <Button symbol="1" handleClick={addText} />
          <Button symbol="2" handleClick={addText} />
          <Button symbol="3" handleClick={addText} />
          <Button symbol="+" color={btnColor} handleClick={addText} />
        </div>

        {/* Calc 4th-row */}
        <div className="row">
          <Button symbol="0" handleClick={addText} />
          <Button symbol="." handleClick={addText} />
          <Button symbol="=" handleClick={calcResult} />
          <Button symbol="-" color={btnColor} handleClick={addText} />
        </div>
        <Button symbol="Clear" color={clearBtnColor} handleClick={clearInput} />
      </div>
    </div>
  );
};

export default App;
