import { GET_MOVIES } from '../consts'

const initialState = {
  movies: []
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return Object.assign({}, state, {
        movies: state.movies.concat(action.payload)
      })

    default:
      return state
  }
}

export default moviesReducer
