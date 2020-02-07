import { GET_MOVIES, GET_MOVIE } from '../consts'
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

// export function getMovie (id) {
//   return function (dispatch) {
//     return fetch()
//       .then(response => response.json())
//       .then(json => {
//         console.log('action ', json.results)
//         dispatch({ type: GET_MOVIE, payload: json.results })
//       })
//   }
// }
