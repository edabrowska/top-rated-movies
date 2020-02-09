import { MOVIE_MODAL_OPEN, MOVIE_MODAL_CLOSE } from '../consts'

const initialState = {}

const movieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_MODAL_OPEN:
      return Object.assign({}, state, {
        movie: action.payload
      })

    case MOVIE_MODAL_CLOSE:
      return {}

    default:
      return state
  }
}

export default movieDetailsReducer
