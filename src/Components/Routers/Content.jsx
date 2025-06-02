import React from 'react'
import { Link } from 'react-router-dom';

const Content = ({ image, title, detail, button, product }) => {
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

export default Content