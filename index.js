const express = require('express')
const { getAllMovies, getMovieByTitle } = require('./controllers/movies')

const app = express()

app.get('/movies', getAllMovies)
app.get('/movies/:search', getMovieByTitle)

app.listen(1337, () => {
  console.log('Listening on port 1337....') // eslint-disable-line no-console
})

