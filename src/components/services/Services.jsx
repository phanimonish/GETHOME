import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import { serviceFeatured } from "../data/Data"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Provided Services' title='Acquire Personable Services' cover={img} />
        <div className='featured container'>
          <div className='content grid5 mtop '>
            {serviceFeatured.map((items, index) => (
              <div className='box cards card-shadow ' key={index}>
                <img src={items.cover} alt='' />
                <h4>{items.name}</h4>
                <label className="">{items.total}</label>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
