import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom';

const Card = ({ image, title, detail, button, product }) => {
  return (
    <div>
      <div className='cardcontainer' >
        <img className='img' src={image} />
        <h2 className='title'>{title}</h2>
        <p className='pdetail'>{detail}</p>
        <Link to={`/productdetail/${product.id}`} className='detailbtn'> {button}
        </Link>
      </div>

    </div>
  )
}

export default Card
