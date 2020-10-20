import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

class CartApp extends React.Component {
  render() {
    const { handleResetCounters, counter, name } = this.props;
    return (
      <div className="shopping">
        <div className="cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="cart-box">
            <button name={name}>{counter}</button>Items
          </span>
        </div>
        <div className="refresh">
          <button className="refreshIcon" onClick={handleResetCounters}>
            <FontAwesomeIcon icon={faSyncAlt} />
          </button>
        </div>
      </div>
    );
  }
}
export default CartApp;
