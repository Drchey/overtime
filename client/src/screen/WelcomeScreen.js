import React from 'react'
import { Link } from 'react-router-dom'

const WelcomeScreen = () => {
  return (
    <div className="welcome-div">
      <h1>
        Overtime <span> Trans Tempo</span>
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
        placeat, repudiandae molestias harum maiores nobis deserunt voluptate,
        quo sed incidunt accusamus ut libero nulla, aspernatur amet nihil minus
        voluptatibus cumque?
      </p>
      <Link className="button" to="/login">
        Get Started
      </Link>
    </div>
  )
}

export default WelcomeScreen
