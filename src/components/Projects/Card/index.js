import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RiReactjsLine, RiJavascriptFill } from 'react-icons/ri'
import { FaSass, FaJava, FaAws } from 'react-icons/fa'
import { BiLogoSpringBoot, BiLogoGraphql } from 'react-icons/bi'
import { SiAwslambda, SiAmazondynamodb, SiCss3, SiHtml5 } from 'react-icons/si'
import React, { useRef } from 'react'

const Card = (props) => {
  const element = useRef();
  props.tools.forEach((tool) => {
   
    
  })

  return (
    <div className="card-container fadeInUp">
      <div className="images">
        <img src={props.img} alt="Gamegar Logo" className="stationary" />
      </div>

      <div className="info">
        <h2 className="game-title">{props.title}</h2>
        <span className="description">{props.description}</span>

        <div className="icons">
          <SiHtml5 size={30} className ="hide" id="html" />
          <SiCss3 size={30} className ="hide" id="css" />
          <FaSass size={30} className ="hide" id="sass" />
          <RiJavascriptFill size={30} className ="hide" id="javascript" />
          <RiReactjsLine size={30} className ="hide" id="react" />
          <FaJava size={30} className ="hide" id="java" />
          <BiLogoSpringBoot size={30} className ="hide" id="spring-boot" />
          <BiLogoGraphql size={30} className ="hide" id="graphql" />
          <FaAws size={30} className ="hide" id="aws" />
          <SiAwslambda size={30} className ="hide" id="awslambda" />
          <SiAmazondynamodb size={30} className ="hide" id="dynamodb" />
        </div>
      </div>
    </div>
  )
}

export default Card
