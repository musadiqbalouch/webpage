import { useParams } from 'react-router-dom'
import { Products } from '../Pagethree/Page3';
import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6";
import "./Productdetail.css"
import img from "../.././assets/Productoneimage1.png"
import image from "../.././assets/Producttwoimage2.png"

const Productdetails = () => {
    const { id } = useParams();
    const param = useParams()
    const xoxo = Products.find((p) => p.id == param.id)
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <div className='product1' >
                <div className='productsection1'>

                    <div className='productonebg1' > <img className='Productoneimage1' src={img} /></div>
                    <div className='productonebg2'>  <img className='Productoneimage2' src={image} /> </div>
                </div>
                <div className='productsection2'>
                    <div>
                        <img className='bottleitimage' src={xoxo.image} />
                        <h1 className='xoxotitle'>{xoxo.title}</h1>
                        <p className='paraofsection2'>{xoxo.detail}</p>
                    </div>
                    <div className='ratings'>
                        <FaStar className='ratting' /> <FaStar className='ratting' /> <FaStar className='ratting' />
                        <FaStar className='ratting' /> <FaStar className='ratting' /> <h2 className='review'>90+Reviews</h2>

                    </div>
                    <div className='detailsss'>
                        <div>
                            <h3 className='price'>Price</h3>
                            <h3 className='dollar'>$ 49.00</h3>

                        </div>

                        <div className='counterbtn'>
                            <div><h2 className='quantity'>Quantity</h2></div>
                            <div className='counter'>
                                <button className='decrement' onClick={decrement}>-</button>
                                <p className='count'>{count}</p>
                                <button className='increment' onClick={increment}>+</button></div>
                        </div>
                    </div>
                    <div className='cartt'>   <button className='cart'>Add To Cart</button></div>
                    <div className='brdrr'></div>
                    <div>
                        <h2 className='description'>Description</h2>
                        <p className='descriptiondtail'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum <br /> quisquam eius odit! Molestiae aliquam eos veritatis fuga  repudiandae <br /> quibusdam modi natus velit, cum quasi quia accusantium? Sit illo <br /> at vitae.
                            At perspiciatis dolorem facere, hic impedit illum tenetur<br /> <br /> maxime blanditiis tempora quia repellat inventore eius, incidunt ipsam <br /> beatae delectus praesentium? Voluptates quasi similique soluta beatae <br /> cumque suscipit autem labore minima.
                            Inventore, numquam illum <br /> totam eaque vel asperna <br /> <br />tur magni, error iure maxime similique quis. Voluptatem reprehenderit <br /> inventore beatae deserunt, commodi aperiam perspiciatis eaque?  <br />Commodi sequi delectus ad laboriosam dolorem tempore veritatis.
                            dolor <br /> sit amet consectetur adipisicing elit. Maxime eveniet ut vel atque <br /> reiciendis nam optio, velit at. Suscipit fuga amet  !</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Productdetails   