import React from 'react'

const Content = ({ image, title, detail, button }) => {
    return (
        <div>

            <div className='cardcontainer' >
                <img className='img' src={image} />
                <h2 className='title'>{title}</h2>
                <p className='pdetail'>{detail}</p>
                <button className='detailbtn'>{button}</button>
            </div>
        </div>
    )
}

export default Content