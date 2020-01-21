const models = require('../models');
const tmdb = require('../helper/tmdb.js');
const _ = require('lodash');

module.exports = {
  search: {
    get: function (req, res) {
      console.log(`search for ${req.params.text}`);
      const searchText = req.params.text;

      tmdb.getSearchResults(searchText, (err, data) => {
        if (err) throw error;
        res.json(data);
      });
    }
  },

  movies: {
    // get everything from database
    getAll: function (req, res) {
      models.movies.getAll((err, results) => {
        if (err) throw err;
        res.json(results);
      })
    },

    // grab the object from API
    save: function (req, res) {
      const movieId = req.params.movieId;

      tmdb.lookUpById(movieId, (err, data) => {
        if (err) {
          console.log(err);
        }
        // extract useful pieces, then save into table
        const params = [...Object.values(_.pick(data, ['id', 'original_title', 'runtime', 'release_date', 'poster_path'])), "false"];
        models.movies.save(params, (err, results) => {
          if (err) {
            console.log(err)
          }
          console.log(results);
          res.sendStatus(201);
        });
      })
    }
  }
}