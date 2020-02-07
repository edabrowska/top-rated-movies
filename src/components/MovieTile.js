import React from 'react'

const MovieTile = ({ title, releaseDate, averageVote }) => {
  return (
    <li className='movie-tile'>
      <div className='movie-tile__wrapper-left'>
        <h3 className='movie-tile__title'>{title}</h3>
        <p>{releaseDate}</p>
      </div>
      <div className='movie-tile__wrapper-right'>
        <p className='movie-tile__rating'>{averageVote}</p>
        <button className='movie-tile__button'>INFO</button>
      </div>
    </li>
  )
}

export default MovieTile
