import React from 'react'

export default function Card({item}) {
  return (
    <div className="cards">
       <div className="title">
        <h1>{item.title}</h1>
       </div>
       <div >
        <img src={item.image} alt={item.title} />
      </div>
     
      <div className="card-over">
        <p>{item.desc}</p>
      </div>
    </div>
  )
}
