const tmdb = require('../helper/tmdb.js');



module.exports = {
  search: {
    get: function (req, res) {
      console.log(`search for ${req.params.text}`);
      const searchText = req.params.text;
      debugger;

      tmdb.getSearchResults(searchText, (err, data) => {
        if (err) throw err;
        debugger;
        res.json(data);
      });
    }
  },

  movies: {
    getAll: function (req, res) {

    },

    saveOrUpdate: function (req, res) {

    }
  }
}