const db = require('../db');


module.exports = {
  movies: {
    getAll: function (cb) {
      // query the db for all
      const queryString = 'select * from movies';
      db.query(queryString, (err, results) => {
        if (err) {
          cb(err);
        } else {
          cb(null, results);
        }
      });
    },

    save: function (params, cb) {
      const queryString = 'insert into movies(movie_id, original_title, runtime, year, poster_path, watched) value (?, ?, ?, ?, ?, ?)';
      db.query(queryString, params, (err, results) => {
        if (err) {
          cb(err);
        } else {
          cb(null, results);
        }
      });
    }
  }
}
