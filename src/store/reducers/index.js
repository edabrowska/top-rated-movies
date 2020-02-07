import { GET_MOVIES, GET_MOVIE } from '../consts'

const initialState = {
  movies: []
}

function rootReducer (state = initialState, action) {
  console.log('reducer ', action.type)

  switch (action.type) {
    case GET_MOVIES:
      return Object.assign({}, state, {
        movies: state.movies.concat(action.payload)
      })

    case GET_MOVIE:
      return action.payload

    default:
      return state
  }
}

export default rootReducer
