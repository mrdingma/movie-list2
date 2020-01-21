import React, { Component } from 'react';
import axios from 'axios';
import Add from './Add.jsx';
import Buttons from './Buttons.jsx';
import Search from './Search.jsx';
import MovieList from './MovieList.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieList: [],
      search: '',
      toggle: null
    };

    this.handleUpdateWatch = this.handleUpdateWatch.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggleButtons = this.handleToggleButtons.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  componentDidMount() {
    this.getAll()
  }

  getAll() {
    axios.get('/movies')
      .then(({ data }) => {
        this.setState({ movieList: data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  //TODO
  handleUpdateWatch(obj) {
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
    axios.post(`/movies/${obj.id}`)
      .then(() => {
        this.getAll();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleSearch(text) {
    this.setState({ search: text });
  }

  handleToggleButtons(e) {
    this.setState({ toggle: e.target.name });
  }

  filterList() {
    // need to filter the movieList for search term and toggled
    let movieList = this.state.movieList;
    const searchText = this.state.search.toLowerCase();
    const currentToggle = this.state.toggle;

    if (searchText !== '') {
      movieList = movieList.filter((movieObj) => {
        return movieObj.original_title.toLowerCase().includes(searchText)
      })
    }

    if (currentToggle !== null) {
      movieList = movieList.filter((movieObj) => {
        return movieObj.watched === currentToggle;
      })
    }

    return movieList;
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <h1>Movie List</h1>
        <Add movieList={this.state.movieList} handleAddMovie={this.handleAddMovie} />
        <br></br>
        <Buttons handleToggleButtons={this.handleToggleButtons} />
        <Search handleSearch={this.handleSearch} />
        <MovieList movieList={this.filterList()} handleUpdateWatch={this.handleUpdateWatch} />
      </div>
    );
  }
}

export default App;