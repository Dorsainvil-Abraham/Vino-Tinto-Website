import React, { useState } from 'react'
import './Contact.css'
import Image from '../WineContact.jpg'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [message, setMessage] = useState('');


  const handlingName = (event) => {
    setName(event.target.value)
  }

  const handlingEmail = (event) => {
    setEmail(event.target.value)
  }
  const handlingCountry = (event) => {
    setCountry(event.target.value)
  }
  const handlingMessage = (event) => {
    setMessage(event.target.value)
  }


  const handlingSubmit = (event) => {
    
    event.preventDefault();
    alert('Form has been Submitted');
  
  }


  return (
    
    <div className="contact">
      <div className="center">
         <h1>Contact Us</h1>
         <p><b>Leave us a Message</b></p>
      </div>

      <div className="image">
        <img src={Image} alt="Image" />

        <form onSubmit={handlingSubmit}> 

        <label htmlFor="user_name">
          User Name
        </label>
        <br />
        <input type="text" value={name}
        onChange={handlingName} placeholder='Enter Your Name' required/>
        <br />

        <label htmlFor="User_email">
          Email
        </label>
        <br />
        <input type="email" value={email} onChange={handlingEmail} placeholder='Enter Your Email' required/>
        <br />

        <label htmlFor="User_country">
          Country
        </label>
        <br />
        <select name="User_country" id="User_country" value={country} onChange={handlingCountry} required>
          <option value="Algeria">Algeria</option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Brazil">Brazil</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Colombia">Colombia</option>
          <option value="Chili">Chili</option>
          <option value="Canada">Canada</option>
          <option value="Dominican Republic">Dominican Republic</option>
          <option value="England">England</option>
          <option value="France">France</option>
          <option value="Guyana">Guyana</option>
          <option value="Haiti">Haiti</option>
          <option value="Kenya">Kenya</option>
          <option value="Mexico">Mexico</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Oman">Oman</option>
          <option value="Saudia Arabia">Saudia Arabia</option>
          <option value="South Africa">South Africa</option>
          <option value="United Arab Emirates" >United Arab Emirates</option>
          <option value="United State of America">United State of America</option>
        </select>
        <br />

          <label htmlFor="User_message">
             Message
          </label>
          <br />
          <textarea name="User_message" id="User_message" placeholder='Write Something' value={message} onChange={handlingMessage} style={{height: '300px'}} required></textarea>
          <br />

          <input type="submit" value="Submit" />
      </form>
      <br />
      </div>

      

     

    </div>
  )
}

export default Contact