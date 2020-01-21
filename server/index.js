const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const controllers = require('./controllers');


app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/search/:text', controllers.search.get)

// app.get('/movies', controllers.movies.getAll)

app.post('/movies', controllers.movies.saveOrUpdate)


app.listen(PORT, () => console.log('Listening on port: ' + PORT));