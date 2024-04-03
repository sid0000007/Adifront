import React from 'react'
import './Navbar.css'
import '../../index.css'
import { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import adid from '../../images/adidasSVG01.svg'
import bag from '../../images/bag.svg'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [items, setitmes] = useState(0);
  const cart = JSON.parse(localStorage.getItem('cart')) || [];



  return (
    <>
      <nav className="palet">
        <Link to="/" className="title logo">
          <img src={adid} alt="" />
        </Link>


        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li className="px-6">
            <NavLink to="/mens">Mens</NavLink>
          </li>
          <li className="px-6">
            <NavLink to="/women">Women</NavLink>
          </li>
          <li className="px-6">
            <NavLink to="/kids">Kids</NavLink>
          </li>

        </ul>


        <ul className={menuOpen ? "open" : ""}>
          <li className="">
            <NavLink to="/cart">
              <div className="flex justify-center">
                <img className='search' style={{width:"25px"}}  src={bag} alt="" />
                <p style={{fontSize:"15px"}}>({cart.length})</p>
              </div>
            </NavLink>

          </li>

          <li>
            
            <header className="flex justify-center items-center align-middle px-4 pt-4">
              <SignedOut> 
              <SignInButton/> 
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
           
          </li>
        </ul>


      </nav>

    </>
  );
};

export default Navbar;