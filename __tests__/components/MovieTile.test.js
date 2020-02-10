import React from 'react'
import renderer from 'react-test-renderer'

import MovieTile from '../../src/components/MovieTile'

describe('MovieTile', () => {
  it('Snapshot', () => {
    const component = renderer.create(
      <MovieTile
        title="Ad Astra"
        releaseDate="2019-09-17"
        averageVote={9}
        onClick={() => 'asd'}
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
