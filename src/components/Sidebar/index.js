import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/juviscript-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComputer,
  faEnvelope,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>

      <nav>
        <NavLink 
          exact="true" 
          activeclassname="active" 
          className="home" 
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#F3DFA2" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="about"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#F3DFA2" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="contact"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#F3DFA2" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="projects"
          to="/projects"
        >
          <FontAwesomeIcon icon={faComputer} color="#F3DFA2" />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/juvi-panaguiton/"> 
            <FontAwesomeIcon icon = {faLinkedin} color = "#BB4430" /> 
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/juviscript"> 
            <FontAwesomeIcon icon = {faGithub} color = "#BB4430" /> 
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
