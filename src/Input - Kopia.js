import React, { Component } from 'react';

class Input extends Component {

  constructor (props) {
    super(props);
    this.count = this.count.bind(this);
    this.setSelectState = this.setSelectState.bind(this);
    this.setSelectState2 = this.setSelectState2.bind(this);
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

  count(e) {
    e.preventDefault();
    const x = e.target.value;

    const y = x * this.state.kind * this.state.kind2


      this.setState({
        userInput: y
      });
  }

  render() {
    return (
      <div>

        <input type="text" onChange={this.count}/>
        Rodzaj 1:
        <select onChange={this.setSelectState}>
          <option value="1">metr</option>
          <option value="1000">kilomert</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        Rodzaj 2:
        <select onChange={this.setSelectState2}>
          <option value="1">metr</option>
          <option value="0.001">kilomert</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <h1>Wynik:</h1>
        <p>{this.state.userInput}</p>
      </div>
    )
  }
}

export default Input;