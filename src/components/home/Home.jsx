import React from "react"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Recent from "./recent/Recent"
import Team from "./team/Team"

const Home = () => {
  return (
    <>
      <Hero />
      <Recent />
      <Featured />
      <Location />
      <Team />
    </>
  )
}

export default Home
