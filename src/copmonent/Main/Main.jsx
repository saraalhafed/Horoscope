import React from 'react'
import './Main.scss'
import Card from "./Card";
import{data} from "../../helpers/data"
export default function Main() {
  return (
    <div  className="card-container ">
        {data.map((item, index) => (
      // the key should be unique to each card in order to help react in rendering
        //the cards correctly and not repeat any data
        <Card item ={item} key={index} />
        // <Card item= {item} key={index} />  this means thatI will have to destructure the props in the card component
      ))}

    </div>
  )
}
