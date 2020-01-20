import React, { Component } from 'react';
// import axios from 'axios';
// import Add from './Add.jsx';
import Buttons from './Buttons.jsx';
import Search from './Search.jsx';
// import MovieList from './MovieList.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: [],
      search: '',
      toggle: null
    };

    this.refreshMovies = this.refreshMovies.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggleButtons = this.handleToggleButtons.bind(this);
  }

  // ComponentDidMount() {
  //   this.getAll()
  // }

  refreshMovies(data) {
    this.setState({ movies: data });
  }

  getAll() {
    axios.get('/movies')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    // - get request to server for db info
    // - set State "movies"
  }

  saveOrUpdate(obj) {
    const options = {};

    axios.post('/movies', options)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleAddMovie(obj) {
    // - TODO: add the watched: boolean field
    //   - passed up from Add
    //     - post request to server
  }

  handleSearch(text) {
    this.setState({ search: text });
  }

  handleToggleButtons(e) {
    debugger;
    this.setState({ toggle: Boolean(e.target.name) });
  }

  render() {
    // need to filter the movieList for search term and toggled
    return (
      <div>
        <h1>Movie List</h1>
        <Search handleSearch={this.handleSearch} />
        <Buttons handleToggleButtons={this.handleToggleButtons} />
      </div>
    );
  }
}

export default App;

/*
        <Add />
        <Buttons />
        <Search />
        <MovieList />
*/
