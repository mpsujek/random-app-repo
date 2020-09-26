import React from "react";

class TestButton extends React.Component {
  render() {
    return (
      <div className="">
        <button>{this.props.buttonText}</button>
      </div>
    );
  }
}

export default TestButton;
