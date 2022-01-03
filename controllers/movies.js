const { send } = require('express/lib/response')
const movies = require('../movies')


const getAllMovies = (request, response) => {
  return response.send(movies)
}
const getMovieByTitle = (request, response) => {
  const { search } = request.params

  const movie = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLowerCase()) ||
    movie.directors.find((director) => director.toLowerCase().includes(search.toLowerCase())
  })

  if (!movie.length) return send.status(404)

  return response.send(movie)
}


module.exports = {
  getAllMovies,
  getMovieByTitle
}
