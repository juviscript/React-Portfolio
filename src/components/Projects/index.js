import './index.scss'
import Loader from 'react-loaders'
import React from 'react'
import Typewriter from 'typewriter-effect'
import Card from './Card'
import Gamegar from '../../assets/images/gamegar-logo.png'
import GamegarGif from '../../assets/images/gamegar-overview.gif'
import Aniverse from '../../assets/images/aniverse-logo.png'
import Portfolio from '../../assets/images/portfolio-logo.png'
import PortfolioGif from '../../assets/images/juviscript-portfolio.gif'
import AniverseGif from '../../assets/images/aniverse-overview.gif'


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
            description="Simple and clean video game catalog. Built a basic front-end, Spring Boot back-end and was deployable on AWS."
            recorded = "true"
            livedemo = "false"
            github="https://github.com/juviscript/Gamegar"
            youtube=""
            tools={[
              'html',
              'css',
              'javascript',
              'java',
              'springboot',
              'aws',
              'dynamodb',
            ]}
          />
          <Card
            img={Aniverse}
            gif={AniverseGif}
            title="AniVerse"
            description="Robust anime catalog where you can create an account, follow friends, add anime to your list of favorites. Built with basic front-end and a Spring Boot backend. Deployed on AWS and incorprated AWS Lambdas for a notification system. Database is filled by External API (AniList) using GraphQL."
            recorded = "true"
            livedemo = "false"
            github=""
            youtube=""
            tools={[
              'html',
              'css',
              'javascript',
              'java',
              'springboot',
              'aws',
              'dynamodb',
              'graphql',
              'awslambda',
            ]}
          />

          <Card
            img={Portfolio}
            gif={PortfolioGif}
            title="Personal Porfolio"
            description="This very website we're using! Built on React.js and has seveal node libraries and components installed. One of the first few React projects I've worked on!"
            github="https://github.com/juviscript/juviscript-portfolio"
            youtube=""
            recorded = "false"
            livedemo = "true"
            tools={[
              'html',
              'css',
              'javascript',
              'react',
            ]}
          />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Projects
