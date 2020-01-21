// needs the movieList
// take results of the API search (array of objects)
// need to iterate through results and see which ones are already in the movieList
// if there, add property "tracked: true"
// pass resulting array to AddList

// on submit, handleAddMovie(this.selectedObject) if not null

// pass function to AddList: on click of that div, set the LOCAL search text
// pass function to AddList: on submit add to set the LOCAL selectedObject


import React, { Component } from 'react';
import axios from 'axios';
import AddList from './AddList.jsx';

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      searchArr: [],
      selectedObj: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.initialize = this.initialize.bind(this);
  }

  onChange(e) {
    const currentTxt = e.target.value;

    if (currentTxt === '') {
      this.setState({ text: '', searchArr: [] });
    } else {
      this.setState({ [e.target.name]: currentTxt });
      this.getSearchResults(currentTxt);
    }
  }

  getSearchResults(text) {
    const refreshSearchArr = this.refreshSearchArr;

    axios.get(`/search/${text}`)
      .then(({ data }) => {
        this.setState({ searchArr: data })
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  initialize() {
    this.setState({ text: '', selectedObj: {}, searchArr: [] });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.handleAddMovie(this.state.selectedObj);
    this.initialize();
  }

  handleSelect(obj) {
    this.setState({ selectedObj: obj, text: obj.title, searchArr: [] });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="text" placeholder="Add movie title here" value={this.state.text} onChange={this.onChange}></input>
          <input type="submit" name="submit" value="Add"></input>
          <AddList searchArr={this.state.searchArr} handleSelect={this.handleSelect} />
        </form>
      </div>
    )
  }
}

export default Add;