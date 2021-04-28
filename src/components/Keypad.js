// Code Keypad Component Here
import React from "react";

class Keypad extends React.Component {
  keyUpEvent = () => {
    console.log("Entering password...");
  };
  render() {
    return <input onKeyUp={this.keyUpEvent} type="password" />;
  }
}

export default Keypad;
