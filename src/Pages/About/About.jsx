import React from 'react'
import Wine from './TastingWine.mp4'
import image from '../../assets/Background/WineBg1.jpg'
import image2 from '../../assets/Background/WineBg4.jpg'
import './About.css'
import { Link } from 'react-router-dom'


function About() {
  return (
    <React.Fragment>
      <div className='about'>
          <h2>ABOUT US</h2>
      </div>
      <div className="video">
          <video src={Wine} width="500" height="500" controls>
          </video>

          <div className="description">
            <br />
            <br />
            
            
            <h2>Welcome</h2>
            <h1> Wine Tasting Events</h1>
            <p>Organize and promote wine tasting events, both virtual and in-person. Users can sign up for events that include guided tastings, food pairings, and educational sessions about different wine regions and varietals.
            </p>
            <p>Offer a curated list of wines with detailed descriptions, ratings, and user reviews. This section can include expert recommendations, tasting notes, and information about the vineyard origin to help users make informed choices.
            </p>

            <button>
            <Link to='/products'>Our Prouducts</Link>
          </button>
          </div>

          <div className="container-rated">
            <div className="rated" style={{width:"30%"}}>
              <h1>Top Rated</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis iusto voluptas cupiditate excepturi nesciunt rerum soluta incidunt consectetur velit autem numquam? </p>
            </div>
            <div className="quality" 
                 style={{width:"30%"}}>
              <h1>Best Quality</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis iusto voluptas cupiditate excepturi nesciunt rerum soluta incidunt consectetur velit autem numquam?</p>
            </div>
            <div className="cost" 
                 style={{width:"30%"}}>
              <h1>Low Cost</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis iusto voluptas cupiditate excepturi nesciunt rerum soluta incidunt consectetur velit autem numquam?</p>
            </div>
          </div>

          <div className="experience">
        
            <div>
              <h2>10 Years Of Experience</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime amet et consequatur neque ab aliquam nemo error perferendis expedita? Laborum quod sed adipisci perspiciatis ut perferendis sapiente id placeat? Voluptatibus?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempora ex doloribus beatae doloremque, nostrum delectus id corrupti porro, expedita quia commodi ab ut, alias officia laudantium quod iusto vel.</p>
            </div>

            <img src={image} alt="Image" className='img1' />

          </div>

          <div className="experience">
            <img src={image2} alt="Image" className='img2'/>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime amet et consequatur neque ab aliquam nemo error perferendis expedita? Laborum quod sed adipisci perspiciatis ut perferendis sapiente id placeat? Voluptatibus?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempora ex doloribus beatae doloremque, nostrum delectus id corrupti porro, expedita quia commodi ab ut, alias officia laudantium quod iusto vel.</p>


              <button>
              <Link to='/contact'>Contact</Link>
              </button>
            </div>

            

            
          </div>
        

          


      </div>
    </React.Fragment>
  )
}

export default About