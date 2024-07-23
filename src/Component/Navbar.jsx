import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Redux from './Redux';
import Contact from './Contact';

function Navbar() {
  return (
    <>
       <nav className='navbar-first'>
            <div className='logo'>
                <a href="">Navbar</a>
            </div>
            <ul className='list'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>about</li></Link>
                <Link to='/redux'><li>Redux</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
          </nav> 

          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/redux' element={<Redux/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>

          </Routes>
  



    </>
  )
}

export default Navbar
