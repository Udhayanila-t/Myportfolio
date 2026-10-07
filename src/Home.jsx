import React from 'react'
import { Link}  from 'react-router-dom'
import nila from './assets/nila.jpg'

function Home() {
  return (
    
    <div className='body'>
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
        <section className='Home-section d-flex flex-column '>
            <div className=' total-content d-flex justify-content-center'>
            <div>
            <div className='sub-section'>
            <h3 className='greet'><b>Hii, i'm</b></h3>
            <h1>Udhayanila</h1>
            <h2>Frontend Developer</h2>
            <h4>I build modern and responsive web applications using React,</h4>
            <h4>Javascript,HTML and CSS</h4>
            </div>
            <div className='d-flex mt-4'>
            <button className='btn'>View projects</button>
            <button className='btn'>contact me</button>
             </div>
             <div className='icons'>
             <i className="bi bi-linkedin m-3 p-1"></i>
             <i className="bi bi-github m-3 p-1"></i>
             <i className="bi bi-person-lines-fill m-3 p-1"></i>
             </div>

             </div>
             <div>
             <img className='Himg' src={nila} width="300" height="300"/>     
            </div>
            </div>
           
        </section>
        
    </div>
    
  )
}

export default Home