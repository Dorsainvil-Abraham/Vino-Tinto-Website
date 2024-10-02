import React from 'react'
import './Footer.css'
import Logo from './WineLogo.jpg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <React.Fragment>
      <div className='black'>
        <div className="footer">
            <div className="footer1">
                <img src={Logo} alt="Logo" style={{width: "150px", height:"100px"}}/>
                <h1>Vino Tinto Collect</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ducimus animi maxime consectetur ipsum commodi sequi qui facere reprehenderit? </p>
            </div>

            <div className="footer1">
                <h2>USEFUL LINKS</h2>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="about">About</Link>
                    <Link to="contact">Contact</Link>
                    <Link to="blog">Blog</Link>
                </div>
                

            </div>

            <div className="footer1">
                <h2>USEFUL LINKS</h2>
                <div>
                    <Link to="products">Products</Link>
                    <Link to="products">Shop</Link>
                    <Link to="/">Disclaimer</Link>
                    <Link to="/">Private Policy</Link>
                </div>
            
            </div>
            
            <div className="footer1">
                <h2>CONTACT US</h2>
                <div>
                    <p><b>Address: </b>
                    Al Majaz 2, Al Whada Street, Sharjah UAE
                    </p>
                    <p><b>Phone: </b>
                     054-715-7947
                    </p>
                    <p><b>Email: </b> 
                    Info@gmail.com
                    </p>
                </div>
            
            </div>

        </div>

        <hr />
        <div className="copyright" style={{textAlign: "Center"}}>
            <p>Vino Tinto Collect 	
            ©2024 copyright
            </p>
        </div>
        
      </div>
    </React.Fragment>
        
  )
}

export default Footer