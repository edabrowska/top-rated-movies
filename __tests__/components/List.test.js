import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import initialState from '../../__mocks__/fileMock'

import List from '../../src/components/List'

describe('List', () => {
  const movies = initialState.movies
  const mockStore = configureStore()

  it('Snapshot', () => {
    const component = renderer.create(
      <Provider store={mockStore(initialState)}>
        <List movies={movies} />
      </Provider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
