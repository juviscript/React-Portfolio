import './index.scss'
import Loader from 'react-loaders'
import React from 'react'
import Typewriter from 'typewriter-effect'
import Card from './Card'
import Gamegar from '../../assets/images/gamegar-logo.png'
import GamegarGif from '../../assets/images/gamegar-overview.gif'

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
            Heres a collection of some of the projects I've worked on and a
            little description of what I've done on each of them. Grab a seat
            and stay a while!
          </p>
        </div>
        <div className="project-container">
          <Card
            img={Gamegar}
            gif={GamegarGif}
            title="Gamegar"
            description="Simple and clean video game catalog. Can query by title and ID as well as add new video game entries. Har de har har. Just trying to work on getting something to fill out the entire screen heheeheh"
            tools={["html", "css"]}
          />
          {/* <Card />
          <Card /> */}
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Projects
