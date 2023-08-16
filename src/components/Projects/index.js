import './index.scss'
import Loader from 'react-loaders'
import React from 'react'
import Typewriter from 'typewriter-effect'
import Card from './Card'

const Projects = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <Typewriter
            options={{
              cursor: '&#9615',
              delay: 100,
            }}
            onInit={(typewriter) => {
              typewriter
                .start()
                .pauseFor(800)
                .typeString('<span class = "about-title">Projects</span>')
                .pauseFor(800)
                .callFunction(() => {
                  document
                    .querySelector('.Typewriter__cursor') // Allows cursor to disappear after a short time, instead of continuously blinking.
                    .classList.add('disappear')
                })
            }}
          />

          <p>
            Heres a collection of some of the projects I've worked on and a little description of what I've done on each of them. Grab a seat and stay a while!
          </p>
        </div>
        <div className = "project-container">
            <Card />
            <Card />
            <Card />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Projects
