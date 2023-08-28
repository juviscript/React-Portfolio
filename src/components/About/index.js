import Loader from 'react-loaders'
import './index.scss'
import Typewriter from 'typewriter-effect'
import Gaming from '../../assets/images/gaming-pc.png'
import Family from '../../assets/images/family-pink.png'
import Guitar from '../../assets/images/instruments.png'
import Corgi from '../../assets/images/corgi-blue.png'
import Navi from '../../assets/images/navi.png'

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

        <div className="images">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={Gaming} />
              </div>

              <div class="flip-card-back" id="gaming">
                <h2>Video Games</h2>

                <p>
                  I'm an avid gamer! I mostly play PC, but console of choice is
                  Playstation. Here's some of my favorites:
                </p>
                <ul>
                  <li>Kingdom Hearts</li>
                  <li>Apex Legends</li>
                  <li>Hearthstone</li>
                  <li>7 Days to Die</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={Family} />
              </div>

              <div class="flip-card-back" id="family">
                <h2>Family</h2>
                <p>
                  Family is extremely important to me. I have my mom, dad, 2
                  sisters, and my nieces and nephew here in America and lots and lots
                  more family in the Philippines!
                </p>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={Guitar} />
              </div>

              <div class="flip-card-back" id="guitar">
                <h2>Music</h2>
                <p>
                  Music is a big part of my life. I was in band class when I was
                  younger and in a band with some friends! I play flute, guitar,
                  ukulele, and piano!
                </p>
                <p>
                  I can't go a day without listening to some kind of
                  music. Here's some of my favorite artists:
                </p>

                <ul>
                  <li>Paramore</li>
                  <li>EDEN</li>
                  <li>Dance Gavin Dance</li>
                  <li>Asian Kung Fu Generation</li>
                  <li>Bruno Mars</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={Corgi} />
              </div>
              <div class="flip-card-back" id="corgi">
                <h2>Navi</h2>
                <p>That's my pup and my bestest friend in the whole entire world! Look, she can drive!</p>

                <img src = {Navi} id = "navi"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About
