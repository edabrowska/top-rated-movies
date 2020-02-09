import React from 'react'
import bemCx from 'bem-modifiers'

const ProductionCompany = ({ logo, name }) => {
  return (
    <div className={bemCx('production-company', !logo && 'without-logo')}>
      {logo && <div className='production-company__logo-wrapper'>
        <img
          src={`https://image.tmdb.org/t/p/w500/${logo}`}
          alt={`${name} logo`}
          className='production-company__logo'
        />
      </div>}
      <p className='production-company__name'>{name}</p>
    </div>
  )
}

export default ProductionCompany
