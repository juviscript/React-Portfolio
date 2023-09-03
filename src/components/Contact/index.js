import Loader from 'react-loaders'
import Typewriter from 'typewriter-effect'
import './index.scss'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Desk from '../../assets/images/desk-setup.gif'


const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_czafr7g',
        'template_7xjb1fd',
        form.current,
        '5sqovvvpnvGhLGxyg'
      )
      .then(
        () => {
          toast.success('Message successfully sent!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          })
        },
        () => {
          toast.error('Server error. Please try again later!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          })
        }
      )
  }

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
                .callFunction(() => {
                  document
                    .querySelector('.Typewriter__cursor') // Allows cursor to disappear after a short time, instead of continuously blinking.
                    .classList.add('disappear')
                })
            }}
          />

          <p>
            I'm extremely interested in any Junior Developer roles and am
            especially abitious working on a large scale project! If you have
            any other requests, questions, or just wanna send a quick "Howdy" -
            Fill out the form below!
          </p>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>

                <li className="half">
                  <input
                    type="email"
                    name="reply_to"
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

      
      <img src = {Desk} id = "desk" className = 
      "fadeInRight"/>
      
      <Loader type="pacman" />
      <ToastContainer />
    </>
  )
}

export default Contact
