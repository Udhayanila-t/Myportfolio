import React from 'react'
import { Link } from 'react-router-dom'
import nila from './assets/nila.jpg'

function About() {
  function download(){
    alert('downloaded')
  }
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
            <hr/>
        </header>
        <div className='about d-flex justify-content-center'>
        <div>
          <img className='abimg' src={nila} alt="nila" width="300" height="300"/>
        </div>
        <div className='aboutcon'>
        <h1><b>About Me</b></h1>

        <p className='statement'>I am a passionate frontend developer who loves bulding beautiful and user friendly web applications i enjoy turning data ideas into real-world projects</p>
        <table> 
          <tr className='r m-2'>
            <td className='pe-3'><i className="bi bi-calendar3"></i></td>
            <td className='pe-3'><b> Full name </b></td>
            <td className='pe-3'><b> : </b></td>
            <td className='pe-3'><b> Udhayanila</b></td>

          </tr>
          <tr className='r m-2'>
            <td ClassName='pe-3'><i class="bi bi-mortarboard-fill"></i></td>
            <td ClassName='pe-3'><b> Education </b></td>
            <td ClassName='pe-3'><b> : </b></td>
            <td ClassName='pe-3'><b> B.Tech Information Technology</b></td>

          </tr>
          <tr className='r m-2'>
            <td ClassName='pe-3'><i class="bi bi-geo-alt-fill"></i></td>
            <td ClassName='pe-3'><b> Location </b></td>
            <td ClassName='pe-3'><b> : </b></td>
            <td ClassName='pe-3'><b> Thanjavur , Tamil Nadu</b></td>

          </tr>
          <tr className='r m-2'>
            <td ClassName='pe-3'><i class="bi bi-envelope-fill"></i></td>
            <td ClassName='pe-3'><b> Email_id </b></td>
            <td ClassName='pe-3'><b> : </b></td>
            <td ClassName='pe-3'><b> Udhayanila@gmail.com</b></td>

          </tr>
          

        </table>
        <button className='aboutbtn rounded-pill' onClick={download}>Download Resume</button>
        </div>
        </div>
        
        </div>
  )
}

export default About