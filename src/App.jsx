
import './App.css'
import Headerr from './Components/Section1/Headerr'
    import {  Routes, Route } from 'react-router-dom';
import Page1 from './Components/Section1/Page1'


function App() {

  return (  
    <div className='setion1'>
      <Headerr />
        <Routes>
       <Route exact path='/'element={<Page1 />} />

        </Routes>
    </div>
  )
}

export default App
