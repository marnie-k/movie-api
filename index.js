const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, getMovieByTitle, addNewMovie } = require('./controllers/movies')

const app = express()

app.get('/movies', getAllMovies)
app.get('/movies/:search', getMovieByTitle)
app.post('/movies', bodyParser.json(), addNewMovie)

app.listen(1337, () => {
  console.log('Listening on port 1337....') // eslint-disable-line no-console
})

