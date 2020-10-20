import React from "react";
import "./style.css";

class Counter extends React.Component {
  render() {
    const { name, handleIncrement, counter, handleDecrement } = this.props;
    return (
      <div className="counter">
        <div className={counter === 0 ? "counterBox" : "changeBox"}>
          {counter || "Zero"}
        </div>
        <span className="outPlus" onClick={handleIncrement} name={name}>
          <button className="inc" name={name}>
            +
          </button>
        </span>
        <span className="outDec">
          <button className="dec" onClick={handleDecrement} name={name}>
            -
          </button>
        </span>
      </div>
    );
  }
}
export default Counter;
