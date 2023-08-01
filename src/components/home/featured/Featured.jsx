import React from "react"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured background featured-background'>
        <div className='container'>
          <h1 className="main-head">Featured Models</h1>
          <p>find your best home by choosing the type of property.</p>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
