import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getMovies, openMovieModal } from '../store/actions/index'

import MovieTile from './MovieTile'

function mapDispatchToProps (dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ getMovies }, dispatch)
  }
}

const ConnectedList = ({ movies, getMovies, dispatch }) => {

  useEffect(() => {
    getMovies()
  }, [])

  const openModalWithMovie = id => dispatch(openMovieModal(id))

  return (
  <ul className='list'>
    {movies && movies.map(movie => (
      <MovieTile
        key={movie.id}
        title={movie.title}
        releaseDate={movie.release_date}
        averageVote={movie.vote_average}
        onClick={() => openModalWithMovie(movie.id)}
      />
    ))}
  </ul>
)}

const List = connect(
  state => ({
    movies: state.app.movies.slice(0, 20)
  }),
  mapDispatchToProps
)(ConnectedList)

export default List
