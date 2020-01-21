import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

const MovieList = ({ movieList, handleUpdateWatch }) => (
  <div>
    {
      movieList.map((movieObj) => <MovieListEntry movieObj={movieObj} handleUpdateWatch={handleUpdateWatch} />)
    }
  </div>
)

export default MovieList;