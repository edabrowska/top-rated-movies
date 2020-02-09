import React, { useRef } from 'react'
import { connect } from 'react-redux'
import bemCx from 'bem-modifiers'

import { useOnClickOutside } from '../hooks/useOnClickOutside'

import { closeMovieModal } from '../store/actions/index'

// import MovieTile from './MovieTile'

const ConnectedModal = ({ movie }) => {

  if (Object.entries(movie).length === 0) return null

  const {
    id,
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
    production_companies
  } = movie

  const modalContent = useRef(null)
  useOnClickOutside(modalContent, () => closeMovieModal())

  console.log(movie)

  return (
    <div className={bemCx('modal__page-overlay', id
      ? 'overlay-in'
      : 'overlay-out'
    )}>
      <div
        className={bemCx('modal', id ? 'modal-in' : 'modal-out')}
        ref={modalContent}
      >
        <div className='modal__img-wrapper'>
          <img src={poster_path} alt={`${title} poster image`} />
        </div>
        <div className='modal__content'>
          <div className='modal__header'>
            <div className='modal__title-wrapper'>
              <h3 className='modal__title'>{title}</h3>
              <p>{release_date}</p>
            </div>
            <p>{vote_average}</p>
          </div>
          <div className='modal__overview'>{overview}</div>
          <div className='modal__genre'>
            <p>Genres:</p>
            <>
              {genres.map(genre => <p key={genre.id}>{genre.name}</p>)}
            </>
          </div>
          <div className='modal__production-company'>
            component
          </div>
        </div>
      </div>
    </div>
  )
}

const Modal = connect(
  state => ({
    movie: state.movieDetails.movie || {}
  }),
  dispatch => ({
    closeMovieModal: dispatch(closeMovieModal())
  })
)(ConnectedModal)

export default Modal
