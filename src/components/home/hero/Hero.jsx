import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Get home by your choice ' subtitle='find your best choice of lifestyle with GetHome.' />

          <form className='flex filter'>
            <div className='box ps-0'>
              <input type='text' required="required" placeholder='location' />
            </div>
            <div className='box'>
              <input type='text' required="required" placeholder='property' />
            </div>
            <div className='box'>
              <input type='text' required="required" placeholder='budget' />
            </div>
            <button className='btn1 search-btn ms-2'>
              <div className="search-content"><img className="search-icon" src="./images/search.png" alt="" /><span className="search">Search</span> </div>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
