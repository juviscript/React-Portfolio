import Loader from 'react-loaders'
import Typewriter from 'typewriter-effect'
import './index.scss'

import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <Typewriter
            options={{
              cursor: '&#9615',
              delay: 80,
            }}
            onInit={(typewriter) => {
              typewriter
                .start()
                .pauseFor(800)
                .typeString('<span class = "about-title">Contact Me </span>')
                .pauseFor(800)
            }}
          />

          <p>
            I'm extremely interested in any Junior Developer roles and am
            especially abitious working on a large scale project! If you have
            any other requests, questions, or just wanna send a quick "Howdy" -
            Fill out the form below!
          </p>

          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>

                <li>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>

                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>

                <li>
                  <textarea name="message" placeholder="Message" required />
                </li>

                <li>
                  <input type="submit" className="flat-button" value="SUBMIT" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Contact
