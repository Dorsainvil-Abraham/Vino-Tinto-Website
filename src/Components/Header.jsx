import React from 'react'
import { NavLink } from "react-router-dom";
import background from '../assets/Background/WineBg4.jpg'
import bg from '../assets/Background/WineBg2.jpg'
import './Header.css'
import Logo from './WineLogo.jpg'

function Header() {

    const bgimage = {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "85vh",
        color: 'white',
        margin: '0'

    }

  return (
    <React.Fragment>
        <div className="logo">
            <img src={Logo} alt="Logo" style={{width: "150px", height:"100px"}}/>
            <h1>Vino Tinto Collect</h1>
        </div>
        <div className="header" style={bgimage}>
            <div>
                <Nav />
            </div>
            
            <br />
            
            
            
        </div>
    </React.Fragment>
    

    
  )
}


function Nav () {

    return(
        <div className="nav">
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='contact'>Contact</NavLink>
                <NavLink to='products'>Products</NavLink>
                <NavLink to='blog'>Blog</NavLink>
            </nav>
        </div>

    )
}

export default Header

