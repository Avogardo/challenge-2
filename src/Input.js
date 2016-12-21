import React from 'react';
var f = require('float');

export default class Input extends React.Component {

  constructor (props) {
    super(props);
    this.setLength = this.setLength.bind(this);
    this.setSelectState = this.setSelectState.bind(this);
    this.setSelectState2 = this.setSelectState2.bind(this);
    this.count = this.count.bind(this);
    this.state = {
      userInput: [],
      kind: 1,
      kind2: 1
    };
  }

  setSelectState(e) {
    e.preventDefault();
    const x = e.target.value;
    this.setState({
      kind: x
    });
  }

  setSelectState2(e) {
    e.preventDefault();
    const x = e.target.value;
    this.setState({
      kind2: x
    });
  }

  setLength(e) {
    e.preventDefault();
    const x = e.target.value;
    this.setState({
      userInput: x
    });

  }

  count() {
    if(this.isNumeric(this.state.userInput)) {
      const y = this.state.userInput * this.state.kind * this.state.kind2;

      return f.round(y, 3);
    } else {
      return "0"
    }
  }

isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

  render() {
    return (
      <div>
          <input type="text" placeholder="0" onChange={this.setLength}/>

          <select onChange={this.setSelectState}>
            <option value="1">metr</option>
            <option value="1000">kilomert</option>
            <option value="0.1">decymetr</option>
            <option value="0.01">centymetr</option>
            <option value="0.001">milimetr</option>
            <option value="0.0254">cal</option>
            <option value="0.3048">stopa</option>
            <option value="0.9144">jard</option>
            <option value="1609.344">mila</option>
          </select>
          na
          <select onChange={this.setSelectState2}>
            <option value="1">metr</option>
            <option value="0.001">kilomert</option>
            <option value="10">decymetr</option>
            <option value="100">centymetr</option>
            <option value="1000">milimetr</option>
            <option value="39.3700787">cal</option>
            <option value="3.2808399">stopa</option>
            <option value="1.0936133">jard</option>
            <option value="0.000621371192">mila</option>
          </select>
        <h1>Wynik:</h1>
        <p>{this.count()}</p>
      </div>
    )
  }
}