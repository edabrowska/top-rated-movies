import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import initialState from '../../__mocks__/fileMock'

import Modal from '../../src/components/Modal'

describe('Modal', () => {
  const movie = initialState.movieDetails.movie
  const mockStore = configureStore()

  it('Snapshot', () => {
    const component = renderer.create(
      <Provider store={mockStore(initialState)}>
        <Modal movie={movie} />
      </Provider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
