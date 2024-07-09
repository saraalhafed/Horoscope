import React from 'react'
import "./Navbar.scss"
export default function Navbar() {
  const navLinks = [
    {
      text: "HOROSCOPES",
      href: "#HOROSCOPES",
    },
    {
      text: "DAILY",
      href: "#DAILY",
    },
    {
      text: "TAROT",
      href: "#TAROT",
    },
    {
      text: "ARTICLES",
      href: "#ARTICLES",
    },
    {
      text: "CONTACT",
      href: "#CONTACT",
    },
    
  ];
  return (
    <div className="navbar" >
      <div className='logo'>  
        <img src="https://harveycla.github.io/horoscope/static/media/logo.d6c42622bddf5a8e7575.png"  />
      </div>
     
      {navLinks.map((link, index) => (
        <div className='link'>
        <a href={link.href} key={index}>
          {link.text}
        </a>
        </div>
          ))}
    </div>
  )
}
