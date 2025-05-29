import React, { useState } from 'react'
import "./Product1.css"
import { FaStar } from "react-icons/fa6";
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>

const product1 = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };


    return (
        <div className='product1'>
            <div className='productsection1'>
                <div className='productonebg1'><img className='Productoneimage1' src='src/assets/Productoneimage1.png' /></div>
                <div className='productonebg2'>  <img className='Productoneimage2' src='src/assets/Producttwoimage2.png' /> </div>
            </div>
            <div className='productsection2'>
                <div>
                    <img className='bottleitimage' src='src/assets/Bottleitimage.png' />
                    <p className='paraofsection2'>The BOTTLE-IT Bag is a patent pending re-useable container that <br />
                        neatly stores those pesky but valuable empty beverage plastic <br /> bottles until you're ready to
                        redeem them - and then lets you <br /> carry them without any mess or problems.  <br /> BOTTLE-IT bags are
                        simple to clean with just a wipe from a damp <br /> cloth or sponge.</p>
                </div>
                <div className='ratings'>
                    <FaStar className='ratting' /> <FaStar className='ratting' /> <FaStar className='ratting' />
                    <FaStar className='ratting' /> <FaStar className='ratting' /> <h2 className='review'>90+Reviews</h2>
                    {/* <h2>Qunatuty</h2> */}
                </div>
                <div className='detailsss'>
                    <div>
                        <h3 className='price'>Price</h3>
                        <h3 className='dollar'>$ 49.00</h3>
                        {/* <button className='cart'>Add To Cart</button> */}
                    </div>
                    {/* <h2>Qunatity</h2> */}
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
    )
}
export default product1