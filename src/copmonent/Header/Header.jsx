import React from 'react'
import "./Header.scss"
export default function Header({ title }) {
  return (
    <div className="header">

      <h1 className='text-shadow'>{title}</h1>
      </div>
  )
}
