import React from "react";

class CalcApp extends React.Component {
  state = {
    result: 0,
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    operators: ["+", "-", "*", "/", "="],
    equation: "",
  };
  btnClick = (number) => {
    console.log(number);
    this.setState({ equation: this.state.equation + number });
  };
  operatorClick = (operator) => {
    const result = this.state.result;
    const equation = this.state.equation;

    this.setState({ equation: this.state.equation + operator });
    console.log(this.state.equation + operator);
    if (operator === "=") {
    }
  };

  render() {
    return (
      <div className="calc-wrapper">
        <div>
          <p>{this.state.result}</p>
          <p>{this.state.equation}</p>
        </div>
        <div>
          {this.state.numbers.map((number, index) => {
            return (
              <button onClick={() => this.btnClick(number)} key={index}>
                {number}
              </button>
            );
          })}
        </div>
        <div>
          {this.state.operators.map((operator, index) => {
            return (
              <button onClick={() => this.operatorClick(operator)} key={index}>
                {operator}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}
export default CalcApp;
