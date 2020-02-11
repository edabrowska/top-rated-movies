import configureStore from 'redux-mock-store'
import nock from 'nock'
import thunk from 'redux-thunk'

import initialState from '../../__mocks__/fileMock'

import {
	getMovies,
	openMovieModal,
	closeMovieModal
} from '../../src/store/actions'

import { API_KEY } from '../../src/utils/consts'

describe('action get data', () => {
	const middlewares = [ thunk ]
	const mockStore = configureStore(middlewares)
	const allMovies = initialState.app.movies
	const oneMovie = initialState.movieDetails.movie
	const movie_id = 419704
	let store

	beforeEach(() => {
		store = mockStore({})
	})

	afterEach(() => {
		// clear all HTTP mocks after each test
		nock.cleanAll()
	  })

	it('gets data', () => {
		nock('https://api.themoviedb.org/3')
			.get(`/movie/popular?api_key=${API_KEY}&page=1`)
			.reply(200, allMovies)

		return store.dispatch(getMovies()).then(() => {
			expect(store.getActions()).toMatchSnapshot()
		})
	})

	it('gets single data and opens modal', () => {
		nock('https://api.themoviedb.org/3')
			.get(`/movie/${movie_id}?api_key=${API_KEY}`)
			.reply(200, oneMovie)

		return store.dispatch(openMovieModal(movie_id)).then(() => {
			expect(store.getActions()).toMatchSnapshot()
		})
	})
})

describe('action close modal', () => {
	const mockStore = configureStore()
	const store = mockStore({})

	it('closes modal', () => {
		store.dispatch(closeMovieModal())

		expect(store.getActions()).toMatchSnapshot()
	})
})