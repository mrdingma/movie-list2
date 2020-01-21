import React, { Component } from 'react';

class MovieListEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    const url = `https://image.tmdb.org/t/p/original/${this.props.movieObj.poster_path}`;

    return (
      <div onClick={this.handleClick}>
        <div>{this.props.movieObj.original_title}</div>
        {this.state.clicked ?
          <div>
            <div>{this.props.movieObj.year}</div>
            <div>{this.props.movieObj.runtime} min</div>
            <img src={url}></img>
          </div>
          : null
        }
      </div>
    )
  }
}

// const MovieListEntry = ({ movieObj, handleUpdateWatch }) => (

export default MovieListEntry;