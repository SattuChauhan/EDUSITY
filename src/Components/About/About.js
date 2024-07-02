import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src = {about_img} alt='' className='about-img'/>
            <img src = {play_icon} alt='' className='play-icon' />
        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorrow's Leaders Today</h2>
            <p>That earliest division caused the present divisions between literary and scientific fields. From one point of view, the world's oldest university is Qarawiyyin university. However, teaching religion is not the definition used by most people. A university should in theory teach every subject.</p>
            <p>The university is generally regarded as a formal institution that has its origin in the Medieval Christian tradition. European higher education took place for hundreds of years in cathedral schools or monastic schools (scholae monasticae). There, monks and nuns taught classes: evidence of these dates back to the 6th century.</p>
            <p>In the early medieval period, most new universities were founded from pre-existing schools, usually when these schools became mainly sites of higher education.</p>
        </div>
    </div>
  )
}

export default About