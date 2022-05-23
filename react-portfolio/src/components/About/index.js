import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I currently earning a bachelor’s degree in Computer Science from the University of Iowa and am planning to graduate in 2023. 
            I have experience using JavaScript and I have a lot of interest working as a front-end engineer one day. 
            I also have experience using React, Java, Python, C++, C, HTML/CSS and Git.
          </p>
          <p align="LEFT">
            In my free time I enjoy watching sports, playing basketball, and being outside.
            I aslo love making art and find myself often having art project ideas that I can't get out of my head until I try them.
            This includes lots of painting but also some woodworking.
          </p>
          <p>
            On this site you will find personal projects that I completed. Through trial and error, the internet and school, 
            creating these projects helped me understand concepts of computer science, languages and frameworks. 
          </p>
        </div>
      </div>
      
      
      <Loader type="pacman" />
    </>
  )
}

export default About