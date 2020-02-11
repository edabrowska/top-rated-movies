import fetch from 'isomorphic-fetch'

import { GET_MOVIES, MOVIE_MODAL_OPEN, MOVIE_MODAL_CLOSE } from '../consts'
import { API_KEY } from '../../utils/consts'

const getPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`

export function getMovies () {
  return function (dispatch) {
    return fetch(getPopular)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_MOVIES, payload: json.results })
      })
  }
}

export function openMovieModal (movie_id) {
  const getOne = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`

  return function (dispatch) {
    return fetch(getOne)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: MOVIE_MODAL_OPEN, payload: json })
      })
  }
}

export const closeMovieModal = () => ({
  type: MOVIE_MODAL_CLOSE,
  payload: null
})
