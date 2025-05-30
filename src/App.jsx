import { Routes, Route } from 'react-router-dom';
import About from "./Components/Routers/About";
import Ourproduct from "./Components/Routers/Ourproduct";
import PreOrder from "./Components/Routers/PreOrder"
import Headerr from './Components/Header/Headerr'
import Homee from './Components/Homee'
import Product1 from './Components/Productone/Product1';
import Productdetails from './Components/Productdetail/Productdetails';
import Page3 from './Components/Pagethree/Page3';
function App() {

  return (
    <div className='setion1'>
      <>
        <Headerr />

        <Routes>
          <Route path='/' element={<Homee />} />
          <Route path='/about' element={<About />} />
          <Route path='/ourproduct' element={<Ourproduct />} />
          <Route path='/preorders' element={<PreOrder />} />
          <Route path='/productone' element={< Product1 />} />
          <Route path='/productdetail' element={<Page3 />} />
          <Route path='/productdetail/:id' element={<Productdetails />} />
        </Routes>
      </>
    </div>
  )
}

export default App
