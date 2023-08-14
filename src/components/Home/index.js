import './index.scss'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import Loader from 'react-loaders'
import React, { useState } from 'react'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = []
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <Typewriter
            options={{
              cursor: '&#9615',
              delay: 50,
            }}
            onInit={(typewriter) => {
              typewriter
                .start()
                .pauseFor(800)
                .typeString(
                  '<span class = "intro" id = "hello-world"> Hello world, </span>'
                )
                .pauseFor(800)
                .typeString(
                  '<br /> <span class = "intro" id = "juvi"> my name is Juvi </span>'
                )
                .pauseFor(2000)
                .callFunction(() => {
                  document
                    .querySelector('.Typewriter__cursor')                 // Allows cursor to disappear after a short time, instead of continuously blinking.
                    .classList.add('disappear')
                })
            }}
          />

          <h2>Full-Stack Developer / Java Expert</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home

// Used TS typewriter effect from here: https://www.npmjs.com/package/typewriter-effect
