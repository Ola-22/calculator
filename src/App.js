import React from "react";
import "./App.css";
// import Counter from "./components/Counter";
// import CartApp from "./components/CartApp";
// import Calculator from "./components/Calculator";
import Calc from "./components/Calc";

class App extends React.Component {
  state = {
    counter: 0,
    counter1: 0,
    counter2: 0,
    counter3: 0,
    counter4: 0,
  };

  handleIncrement = (e) => {
    const { name } = e.target;
    console.log(e.target);
    this.setState((prevState) => {
      const newCounter = prevState[name] + 1;
      if (prevState[name] === 0) {
        return { [name]: newCounter, counter: prevState.counter + 1 };
      }
      return { [name]: newCounter };
    });
  };

  handleDecrement = (e) => {
    const { name } = e.target;
    this.setState((prevState) => {
      const newCounter = prevState[name] - 1;
      if (prevState[name] === 1) {
        return { [name]: newCounter, counter: prevState.counter - 1 };
      }
      return { [name]: newCounter };
    });
  };

  handleResetCounters = () => {
    this.setState({
      counter: 0,
      counter1: 0,
      counter2: 0,
      counter3: 0,
      counter4: 0,
      input: "",
    });
  };

  render() {
    // const { counter, counter1, counter2, counter3, counter4 } = this.state;
    return (
      <div className="App">
        {/* <CartApp
          handleResetCounters={this.handleResetCounters}
          name="counter"
          counter={counter}
        />
        <Counter
          handleIncrement={this.handleIncrement}
          name="counter1"
          counter={counter1}
          handleDecrement={this.handleDecrement}
        />
        <Counter
          handleIncrement={this.handleIncrement}
          name="counter2"
          counter={counter2}
          handleDecrement={this.handleDecrement}
        />
        <Counter
          handleIncrement={this.handleIncrement}
          name="counter3"
          counter={counter3}
          handleDecrement={this.handleDecrement}
        />
        <Counter
          handleIncrement={this.handleIncrement}
          name="counter4"
          counter={counter4}
          handleDecrement={this.handleDecrement}
        /> */}
        {/* <Calculator /> */}
        {/* <Calculator /> */}
        <Calc />
        {/* <Calculator /> */}
        {/* <CalcInput /> */}
      </div>
    );
  }
}

export default App;
