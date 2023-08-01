import React from "react"
import { featured } from "../../data/Data"

const FeaturedCard = () => {
  return (
    <>
      <div className='content grid5 mtop '>
        {featured.map((items, index) => (
          <div className='box cards card-shadow ' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label className="featured-items featured-text">{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
