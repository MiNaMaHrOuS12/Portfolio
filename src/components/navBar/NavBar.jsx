import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <div className='n-wrapper'>
        <div className="n-leftside">
            <h1 className='name'>Mina</h1>
            <span>toggle</span>
        </div>
        <div className="n-rightside">
            <div className="n-list">
                <ul style={{listStyleType: "none"}}>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className="button">
                Contact Us        
            </button>
        </div>
    </div>
  )
}

export default NavBar
