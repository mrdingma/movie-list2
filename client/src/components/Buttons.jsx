import React, { Component } from 'react';


class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentToggle: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ currentToggle: e.target.name });
    this.props.handleToggleButtons(e);
  }

  render() {
    let className1;
    let className2;

    if (this.state.currentToggle === 'true') {
      className1 = 'greenButton';
      className2 = '';
    } else if (this.state.currentToggle === 'false') {
      className1 = '';
      className2 = 'greenButton';
    } else {
      className1 = '';
      className2 = '';
    }

    return (
      <div>
        <button className={className1} name="true" onClick={this.handleClick}>Watched</button>
        <button className={className2} name="false" onClick={this.handleClick}>To Watch</button>
      </div>
    )
  }
}


export default Buttons;