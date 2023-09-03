import './index.scss'
import { RiReactjsLine } from 'react-icons/ri'
import { FaSass, FaJava, FaAws } from 'react-icons/fa'
import { BiLogoSpringBoot, BiLogoGraphql } from 'react-icons/bi'
import {
  SiAwslambda,
  SiAmazondynamodb,
  SiCss3,
  SiHtml5,
  SiJavascript,
} from 'react-icons/si'
import React from 'react'

const Card = (props) => {
  return (
    <div className="card-container fadeInUp">
      <img src={props.img} alt="Gamegar Logo" className="stationary" />
      <img src={props.gif} alt="Gamegar Gif" className="gif" />

      <div className="info">
        <h2 className="game-title">{props.title}</h2>
        <div className="description">{props.description}</div>
        <div className='buttons'>
          <button className={`${props.recorded == ('true') ? 'flat-button' : 'hide'}`}>Recorded Demo</button>
          <a target="_blank" rel="noreferrer" href={props.live}> 
          <button className={`${props.livedemo == ('true') ? 'flat-button' : 'hide'}`}>Live Demo</button>
          </a>
          <a target="_blank" rel="noreferrer" href={props.github}> 
          <button className="flat-button">Source Code</button>
          </a>
        </div>
        <div className="icons">
          <SiHtml5
            size={30}
            className={`${props.tools.includes('html') ? 'float' : 'hide'}`}
            color="#e44d26"
            title="HTML 5"
          />
          <SiCss3
            size={30}
            className={`${props.tools.includes('css') ? 'float' : 'hide'}`}
            color="#1b84c1"
            title="CSS 3"
          />
          <FaSass
            size={30}
            className={`${props.tools.includes('sass') ? 'float' : 'hide'}`}
            color="#c76494"
            title="SASS"
          />
          <SiJavascript
            size={30}
            className={`${
              props.tools.includes('javascript') ? 'float' : 'hide'}`}
            color="#e9d44d"
            title="JavaScript"
          />
          <RiReactjsLine
            size={30}
            className={`${props.tools.includes('react') ? 'float' : 'hide'}`}
            color="#00d1f7"
            title="React"
          />
          <FaJava
            size={30}
            className={`${props.tools.includes('java') ? 'float' : 'hide'}`}
            color="#d22d2d"
            title="Java"
          />
          <BiLogoSpringBoot
            size={30}
            className={`${
              props.tools.includes('springboot') ? 'float' : 'hide'}`}
            color="#6aad3d"
            title="Spring Boot"
          />
          <BiLogoGraphql
            size={30}
            className={`${props.tools.includes('graphql') ? 'float' : 'hide'}`}
            color="#de33a6"
            title="GraphQL"
          />
          <FaAws
            size={30}
            className={`${props.tools.includes('aws') ? 'float' : 'hide'}`}
            color="#222e3d"
            title="AWS"
          />
          <SiAwslambda
            size={30}
            className={`${
              props.tools.includes('awslambda') ? 'float' : 'hide'}`}
            color="#d16312"
            title="AWS Lambda"
          />
          <SiAmazondynamodb
            size={30}
            className={`${props.tools.includes('dynamodb') ? 'float' : 'hide'}`}
            color="#4763e1"
            title="DynamoDB"
          />
        </div>
      </div>
    </div>
  )
}

export default Card

/* This site was EXCEPTIONALLY helpful in this part: https://www.pluralsight.com/guides/applying-classes-conditionally-react */
