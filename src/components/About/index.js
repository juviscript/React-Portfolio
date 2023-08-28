import Loader from 'react-loaders'
import './index.scss'
import Typewriter from 'typewriter-effect'
import Gaming from '../../assets/images/gaming-pc.png'
import Family from '../../assets/images/family-pink.png'
import Guitar from '../../assets/images/instruments.png'
import Corgi from '../../assets/images/corgi-blue.png'

const About = () => {
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
                .typeString('<span class = "about-title">About Me </span>')
                .pauseFor(800)
                .callFunction(() => {
                  document
                    .querySelector('.Typewriter__cursor') // Allows cursor to disappear after a short time, instead of continuously blinking.
                    .classList.add('disappear')
                })
            }}
          />

          <p>
            My name is Juvilane, but you can call me 'Juvi' for short. I'm a
            proud first-generation Filipino-American born and raised in
            Jacksonville, Florida.
          </p>

          <p>
            I've been working in the tech industry for over 3 years now, mostly
            in IT support, and have been learning programming for over 2 years
            now, one of which has been in bootcamp that focused on back-end
            development with Java and AWS. I'm continuiously improving my coding
            skills one day at a time and I stay curious!
          </p>

          <p>
            If you asked me what my 'Why?' was for anything I do and have ever
            done in my lifetime, the one and only answer would be: "For my
            family."
          </p>
        </div>

        <div className ="images">
            <img src = {Gaming} />
            <img src = {Family} />
            <img src = {Guitar} />
            <img src = {Corgi} />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About