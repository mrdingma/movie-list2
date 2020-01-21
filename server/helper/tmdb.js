const axios = require('axios');
const config = require('../../config');


let getSearchResults = (text, cb) => {
  const url = 'https://api.themoviedb.org/3/search/movie'

  axios.get(url, {
    params: {
      query: text,
      api_key: config.TOKEN
    }
  })
    .then(function (response) {
      cb(null, response.data.results);
    })
    .catch(function (error) {
      cb(error)
    })
}

let lookUpById = (id, cb) => {
  const url = `https://api.themoviedb.org/3/movie/${id}`

  axios.get(url, {
    params: {
      api_key: config.TOKEN
    }
  })
    .then(function (response) {
      cb(null, response.data);
    })
    .catch(function (error) {
      cb(error)
    })
}



module.exports = {
  getSearchResults,
  lookUpById
}