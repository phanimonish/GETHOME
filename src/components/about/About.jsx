import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='Identity Unveiled - Get to Know Us ' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Journey Unveiled' subtitle='Connecting Dreams with Reality: The Story of "GETHOME"' />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className='btn4 ms-2'><span className="about-apan p-3">view more</span></button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' className="abt-img" alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
