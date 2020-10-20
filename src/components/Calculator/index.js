import React from "react";
import "./style.css";

class Calculator extends React.Component {
  state = {
    input: "",
    currentOperator: null,
    lastValue: 0,
  };
  handleInputString = (i) => {
    console.log(i);
    let input = this.state.input;
    input += i;
    this.setState({ input });
  };

  addNum = () => {
    let input = this.state.input;
    let lastValue = this.state.lastValue;
    return (lastValue += parseFloat(input));
  };
  evalInput = (i) => {
    console.log(i);
    let input = this.state.input;
    let currentOperator = this.state.currentOperator;
    let lastValue = this.state.lastValue;
    input += i;
    if (i === "=") {
      if (currentOperator === "+") {
        lastValue += parseFloat(input);
      } else if (currentOperator === "-") {
        lastValue -= parseFloat(input);
      } else if (currentOperator === "*") {
        lastValue *= parseFloat(input);
      } else if (currentOperator === "/") {
        lastValue /= parseFloat(input);
      }

      input = lastValue;
      currentOperator = null;
    } else {
      currentOperator = i;
      lastValue = parseFloat(input);
    }
    console.log(input);
    console.log(lastValue);
    this.setState({ input: input, currentOperator: currentOperator });
  };
  clearInput = () => {
    this.setState({ input: "" });
  };
  // evalInput = (e) => {
  //   this.setState({
  //     input: this.state.input + "=" + math.evaluate(this.state.input),
  //   });
  // };

  render() {
    return (
      <div className="calc-wrapper">
        <div className="input">{this.state.input}</div>
        <div className="row">
          <button name="AC" className="" onClick={() => this.clearInput}>
            AC
          </button>
          <button
            name="+/-"
            className=""
            onClick={() => this.handleInputString("-")}
          >
            +/-
          </button>
          <button
            name="%"
            className=""
            onClick={() => this.handleInputString("%")}
          >
            %
          </button>
          <button
            name="/"
            className="btn2"
            onClick={() => this.handleInputString("/")}
          >
            ÷
          </button>
        </div>
        <div className="row">
          <button
            name="7"
            className="btnNum"
            onClick={() => this.handleInputString("7")}
          >
            7
          </button>
          <button
            name="8"
            className="btnNum"
            onClick={() => this.handleInputString("8")}
          >
            8
          </button>
          <button
            name="9"
            className="btnNum"
            onClick={() => this.handleInputString("9")}
          >
            9
          </button>
          <button onClick={() => this.handleInputString("*")} className="btn2">
            ×
          </button>
        </div>
        <div className="row">
          <button
            name="4"
            className="btnNum"
            onClick={() => this.handleInputString("4")}
          >
            4
          </button>
          <button
            name="5"
            className="btnNum"
            onClick={() => this.handleInputString("5")}
          >
            5
          </button>
          <button
            name="6"
            className="btnNum"
            onClick={() => this.handleInputString("6")}
          >
            6
          </button>
          <button name="-" className="btn2" onClick={() => this.evalInput("-")}>
            -
          </button>
        </div>
        <div className="row">
          <button
            name="1"
            className="btnNum"
            onClick={() => this.handleInputString("1")}
          >
            1
          </button>
          <button
            name="2"
            className="btnNum"
            onClick={() => this.handleInputString("2")}
          >
            2
          </button>
          <button
            name="3"
            className="btnNum"
            onClick={() => this.handleInputString("3")}
          >
            3
          </button>
          <button onClick={() => this.addNum()}>+</button>
        </div>
        <div className="row">
          <button
            name="0"
            className="btnNum zero"
            onClick={() => this.handleInputString("0")}
          >
            0
          </button>
          <button
            name="."
            className="btnNum"
            onClick={() => this.handleInputString(".")}
          >
            .
          </button>
          <button name="=" className="btn2" onClick={() => this.evalInput("=")}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
