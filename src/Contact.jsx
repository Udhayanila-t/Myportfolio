import React from 'react'
import { Link } from 'react-router-dom'
import anime2 from './assets/anime2.jpeg'
function Contact() {
  return (
    <div >
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
               <div className='d-flex'>
               <div className='f-1'>
               <div className="contact-form">

<h2><b>Contact Me </b></h2>

<div className="mb-3">
  <label className="form-label">Name</label>
  <input
    type="text"
    className="form-control"
    placeholder="Enter your name"
  />
</div>

<div className="mb-3">
  <label className="form-label">Email</label>
  <input
    type="email"
    className="form-control"
    placeholder="Enter your email"
  />
</div>

<div className="mb-3">
  <label className="form-label">Message</label>
  <textarea
    className="form-control"
    rows="4"
    placeholder="Enter your message"
  ></textarea>
</div>

<button type="submit" className="btn">
  Send Message
</button>

</div>
               </div>
               <div className='f-2 d-flex'>
                <div className='right'>
                <h2 className='connect'><b>Let's Connect</b></h2>
                <p className='p'>I'm always open to discussing new projects, creative ideas or opportunities to be part of yor visions</p>
                <table>
                  <tr className='r'>
                    <td><i class="bi bi-telephone-fill"></i></td>
                    <td>+91 1234567890</td>
                  </tr>
                  <tr className='r'>
                    <td><i class="bi bi-envelope-fill"></i></td>
                    <td>nila@gmail.com</td>
                  </tr>
                  <tr className='r'>
                    <td><i class="bi bi-geo-alt-fill"></i></td>
                    <td>Thanjavur, Tamil Nadu</td>
                  </tr>
                  <tr className='r'>
                    <td><i class="bi bi-linkedin"></i></td>
                    <td>linkedin.com/in/udhayanila</td>
                  </tr>
                  <tr className='r'>
                    <td><i class="bi bi-github"></i></td>
                    <td>github.com/Udhayanila</td>
                  </tr>
                  
                    
                  
                </table>
                <button className='btn mt-5'>Send sms</button>
                <button className='btn mt-5'>Send mail</button>
                </div>
                <img className='anime-img' src={anime2} />
               </div>
               </div>
    </div>
  )
}

export default Contact