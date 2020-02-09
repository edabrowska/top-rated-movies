import { combineReducers } from 'redux'

import moviesReducer from './movies'
import movieDetailsReducer from './movieModal'

const rootReducer = combineReducers({
  app: moviesReducer,
  movieDetails: movieDetailsReducer
})

export default rootReducer
