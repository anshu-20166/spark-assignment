import React, { Component } from "react";
import Right from "./Right";
class Left extends Component {
  constructor() {
    super();
    this.state = {
      arr: [],
    };
  }

  fun = (e) => {
    console.log("hii");
    var s = e.target.value;
    var arr1 = this.state.arr;
    arr1.push(e.target.value);
    this.setState({
      arr: arr1,
    });
    console.log((arr1 = this.state.arr));
  };

  render() {
    return (
      <div className="main">
        <div className="left">
          <h2>portgual</h2>

          <input
            type="checkbox"
            id="p1"
            name="p1"
            value="Aasiya Jayavant"
            onChange={this.fun}
          />
          <label for="p1"> Aasiya Jayavant</label>
          <br />
          <input
            type="checkbox"
            id="p2"
            name="p2"
            value="Luvleen Lawrence"
            onChange={this.fun}
          />
          <label for="p2">Luvleen Lawrence </label>
          <br />
          <input
            type="checkbox"
            id="p3"
            name="p3"
            value="Rey Mibourne"
            onChange={this.fun}
          />
          <label for="p3"> Rey Mibourne</label>
          <br />
          <input
            type="checkbox"
            id="p3"
            name="p3"
            value="Cayla Brister"
            onChange={this.fun}
          />
          <label for="p3"> Cayla Brister</label>
          <br />
          <h4>Nicaragua</h4>
          <input
            type="checkbox"
            id="n1"
            name="n1"
            value="Deveedaas Nandi"
            onChange={this.fun}
          />
          <label for="n1"> DEveedaas Nandi</label>
          <br />
          <input
            type="checkbox"
            id="n2"
            name="n2"
            value="Obasey chidy"
            onChange={this.fun}
          />
          <label for="n2"> Obasey chidy</label>
          <br />
          <input
            type="checkbox"
            id="n3"
            name="n3"
            value="Xenie bolezelova"
            onChange={this.fun}
          />
          <label for="n3"> Xenie bolezelova</label>
          <br />
          <input
            type="checkbox"
            id="n4"
            name="n4"
            value="Ezequiel engra"
            onChange={this.fun}
          />
          <label for="n4"> Ezequiel engra</label>
          <br />
          <h4>Marshall Islands</h4>
          <input
            type="checkbox"
            id="m1"
            name="m1"
            value="Aaron Almaraz"
            onChange={this.fun}
          />
          <label for="m1"> Aaron Almaraz</label>
          <br />
          <input
            type="checkbox"
            id="m2"
            name="m2"
            value="Jelena Denisova"
            onChange={this.fun}
          />
          <label for="m2"> Jelena Denisova</label>
          <br />
        </div>

        <div>
          <Right arr={this.state.arr} />
        </div>
      </div>
    );
  }
}

export default Left;
