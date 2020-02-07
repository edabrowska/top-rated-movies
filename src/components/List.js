import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getMovies } from '../store/actions/index'

const ConnectedList = ({ movies, getMovies }) => {

  useEffect(() => {
    getMovies()
  }, [])

console.log(movies)
  return (
  <ul className='list'>
    {movies && movies.map(el => (
      <li key={el.id}>{el.title} {el.release_date} {el.vote_average}</li>
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
