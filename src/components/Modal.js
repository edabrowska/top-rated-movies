import React, { useRef } from 'react'
import { connect } from 'react-redux'
import bemCx from 'bem-modifiers'

import { useOnClickOutside } from '../hooks/useOnClickOutside'

import { closeMovieModal } from '../store/actions/index'

import ProductionCompany from './ProductionCompany'

const ConnectedModal = ({ movie, closeMovieModal }) => {

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
  useOnClickOutside(modalContent, closeMovieModal)

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
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={`${title} poster image`}
            className='modal__poster-image'
          />
        </div>
        <div className='modal__content'>
          <div className='modal__header'>
            <div className='modal__title-wrapper'>
              <h3 className='modal__title'>{title}</h3>
              <p className='modal__release-date'>{release_date}</p>
            </div>
            <p className='modal__vote'>{vote_average}</p>
          </div>
          <div className='modal__overview'>{overview}</div>
          <div className='modal__genre'>
            <p className='modal__genre-title'>Genres:</p>
            <div className='modal__genre-wrapper'>
              {genres.map(genre => <p key={genre.id} className='modal__genre-type'>{genre.name}</p>)}
            </div>
          </div>
          <div className='modal__production-company'>
            {production_companies.map(company => <ProductionCompany
              key={company.id}
              logo={company.logo_path}
              name={company.name}
            />)}
          </div>
        </div>
        <button className='modal__button' onClick={closeMovieModal}>asdXXX</button>
      </div>
    </div>
  )
}

const Modal = connect(
  state => ({
    movie: state.movieDetails.movie || {}
  }),
  dispatch => ({
    closeMovieModal: () => dispatch(closeMovieModal())
  })
)(ConnectedModal)

export default Modal
