import React from 'react'
import "./Card.css"

const Card = ({image,title,detail,button}) => {
  return (
    <div>
       
        <div className='cardcontainer'>
           <img className='img' src={image} />
           <h2 className='title'>{title}</h2>
           <p className='pdetail'>{detail}</p>
           <button className='detailbtn'>{button}</button>
        </div>
    </div>
  )
}

export default Card