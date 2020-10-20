import React from "react";
import "./style.css";

class Calc extends React.Component {
  state = {
    InputVal: "0",
    lastValue: 0,
    calcState: 1,
    currentOperator: null,
    expectLastVal: false,
  };

  clear = () => {
    this.setState({
      InputVal: "0",
    });
  };

  changeSign() {
    const InputEnd = this.state.InputVal;
    this.setState({ InputVal: InputEnd * -1 });
  }
  mod() {
    const InputEnd = this.state.InputVal;
    this.setState({ InputVal: InputEnd / 100 });
  }

  handleClick(prevState) {
    const calcState = this.state.calcState;
    const expectLastVal = this.state.expectLastVal;
    const InputVal = this.state.InputVal;
    if (expectLastVal || InputVal === "0") {
      this.setState({
        InputVal: prevState,
        expectLastVal: false,
      });
      console.log(calcState);
    } else {
      this.setState({
        InputVal: this.state.InputVal + prevState,
      });
    }
    if (calcState === 1) {
      this.setState({ calcState: 2 });
    }
  }
  percent() {
    const { InputVal } = this.state;
    this.setState({
      display: InputVal / 100,
      operator: "",
      firstNumber: "",
      waiting: "no",
    });
  }
  handleOperatorPress(operator) {
    let calcState = this.state.calcState;
    let InputVal = this.state.InputVal;
    let lastValue = this.state.lastValue;
    let currentOperator = this.state.currentOperator;
    if (calcState === 1) {
      return;
    } else {
      if (calcState === 2) {
        calcState = 3;
      }
      if (operator === "=") {
        if (currentOperator === "+") {
          lastValue += parseFloat(InputVal);
        } else if (currentOperator === "-") {
          lastValue -= parseFloat(InputVal);
        } else if (currentOperator === "*") {
          lastValue *= parseFloat(InputVal);
        } else if (currentOperator === "/") {
          lastValue /= parseFloat(InputVal);
        }
        console.log(calcState);
        console.log(InputVal);
        console.log(lastValue);
        console.log(currentOperator);

        InputVal = lastValue;
        currentOperator = null;
      } else {
        currentOperator = operator;
        lastValue = parseFloat(InputVal);
      }
      console.log(InputVal);
    }

    this.setState({
      InputVal: InputVal,
      lastValue: lastValue,
      currentOperator: currentOperator,
      calcState: calcState,
      expectLastVal: true,
    });
  }

  render() {
    return (
      <div className="calc-wrapper">
        <div className="input">{this.state.InputVal}</div>
        <div className="row">
          <button onClick={() => this.clear()}>AC</button>
          <button onClick={() => this.changeSign()}>+/-</button>
          <button value={"%"} onClick={() => this.mod()}>
            %
          </button>
          <button
            className="btn2"
            onClick={() => {
              this.handleOperatorPress("/");
              this.handleClick("÷");
            }}
          >
            ÷
          </button>
        </div>
        <div className="row">
          <button className="btnNum" onClick={() => this.handleClick("7")}>
            7
          </button>
          <button className="btnNum" onClick={() => this.handleClick("8")}>
            8
          </button>
          <button className="btnNum" onClick={() => this.handleClick("9")}>
            9
          </button>
          <button
            className="btn2"
            onClick={() => {
              this.handleOperatorPress("*");
              this.handleClick("*");
            }}
          >
            ×
          </button>
        </div>
        <div className="row">
          <button className="btnNum" onClick={() => this.handleClick("4")}>
            4
          </button>
          <button className="btnNum" onClick={() => this.handleClick("5")}>
            5
          </button>
          <button className="btnNum" onClick={() => this.handleClick("6")}>
            6
          </button>
          <button
            className="btn2"
            onClick={() => {
              this.handleOperatorPress("-");
              this.handleClick("-");
            }}
          >
            -
          </button>
        </div>
        <div className="row">
          <button className="btnNum" onClick={() => this.handleClick("1")}>
            1
          </button>
          <button className="btnNum" onClick={() => this.handleClick("2")}>
            2
          </button>
          <button className="btnNum" onClick={() => this.handleClick("3")}>
            3
          </button>
          <button
            className="btn2"
            onClick={() => {
              this.handleOperatorPress("+");
              this.handleClick("+");
            }}
          >
            +
          </button>
        </div>
        <div className="row">
          <button className="btnNum zero" onClick={() => this.handleClick("0")}>
            0
          </button>
          <button onClick={() => this.handleClick(".")}>.</button>
          <button
            className="btn2"
            onClick={() => this.handleOperatorPress("=")}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calc;
