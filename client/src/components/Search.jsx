import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div className="search">
        <form onSubmit={this.onSubmit}>
          <input type="text" name="text" placeholder="Search..." value={this.state.text} onChange={this.onChange}></input>
          <input type="submit" name="submit" id="submit" value="Go!"></input>
        </form>
      </div>
    )
  }
}


export default Search;