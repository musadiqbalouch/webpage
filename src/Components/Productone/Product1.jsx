import React from 'react'
import "./Product1.css"
import { FaStar } from "react-icons/fa6";
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>

const product1 = () => {
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
                </div>
                <div>
                    <h3 className='price'>Price</h3>
                    <h3 className='dollar'>$ 49.00</h3>
                    <button className='cart'>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default product1