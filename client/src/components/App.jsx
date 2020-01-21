import React, { Component } from 'react';
import axios from 'axios';
import Add from './Add.jsx';
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
    const movieId = obj.id;

    axios.post(`/search/${movieId}`)
      .then(function ({ data }) {
        refreshSearchArr(data);
      })
      .catch(function (error) {
        console.log(error);
      })
    // need to add watched: null
    // need to filter out parts dont need
    // need to save to db
    // then add to movieList
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
        <Add movieList={this.state.movieList} />
        <Buttons handleToggleButtons={this.handleToggleButtons} />
        <Search handleSearch={this.handleSearch} />
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
