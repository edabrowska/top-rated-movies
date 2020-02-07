import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getMovies } from '../store/actions/index'

import MovieTile from './MovieTile'

const ConnectedList = ({ movies, getMovies }) => {

  useEffect(() => {
    getMovies()
  }, [])

console.log(movies)
  return (
  <ul className='list'>
    {movies && movies.map(movie => (
      <MovieTile
        key={movie.id}
        title={movie.title}
        releaseDate={movie.release_date}
        averageVote={movie.vote_average}
      />
    ))}
  </ul>
)}

const List = connect(
  state => ({
    movies: state.movies.slice(0, 20)
  }),
  { getMovies }
)(ConnectedList)

export default List
