import React from 'react'
import renderer from 'react-test-renderer'

import ProductionCompany from '../../src/components/ProductionCompany'

describe('ProductionCompany', () => {
  it('Snapshot', () => {
    const component = renderer.create(
      <ProductionCompany
        logo={null}
        name="disney"
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
