import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import html from './assets/html.png';
import css from './assets/css.png';
import react from './assets/react.png';
import js from './assets/js.png';
import java from './assets/java.png';

function Skills() {

  const [skill, setskills] = useState([
    {
      img: html,
      name: 'HTML'
    },
    {
      img: css,
      name: 'CSS'
    },
    {
      img: js,
      name: 'Java script'
    },
    {
      img: react,
      name: 'React'
    },
    {
      img: java,
      name: 'Java'
    }
  ]);

  return (
    <div>

      <header className='header'>
        <nav className='navbar'>
          <h4 className='mt-3'>MY PORTFOLIO</h4>

          <div className='nav-links'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/skills'>Skills</Link>
            <Link to='/contact'>Contact</Link>
          </div>
        </nav>

        <hr />
      </header>


      <div className='skill d-flex justify-content-center'>
        <h2><b>My Skills</b></h2>
      </div>


      {/* Cards */}
      <div className="container mt-5">
  <div className="d-flex justify-content-center gap-4">

    {skill.map((skills) => (
      <div key={skills.name}>
        <div
          className="card text-center"
          style={{ width: '10rem', height: '13rem' }}
        >
          <img
            src={skills.img}
            className="card-img-top"
            alt={skills.name}
            style={{ height: '120px', objectFit: 'contain' }}
          />

          <div className="card-body">
            <h5 className="card-title">{skills.name}</h5>
          </div>
        </div>
        
      </div>
    ))}
  </div>
  
</div>

    </div>
  )
}

export default Skills