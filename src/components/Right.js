import React, { Component } from "react";

class right extends Component {
  render() {
    const { arr } = this.props;
    console.log(arr);
    return (
      <div className="right">
        {arr.map((item) => (
          <div>
            <h4>{item}</h4>
          </div>
        ))}
      </div>
    );
  }
}

export default right;
