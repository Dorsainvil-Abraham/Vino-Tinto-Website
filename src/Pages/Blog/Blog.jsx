import React from 'react'
import Wine1 from '../../Pages/WineContact.jpg'
import Wine2 from '../../Pages/WineEducational.jpg'
import Wine3 from '../../Pages/WineReview.jpg'
import Wine4 from '../../Pages/WineTesting.jpg'
import './Blog.css'

function Blog() {
  return (
    <div>
      <h1>Our Blog</h1>
      <div className="wine1">
        <img src={Wine1} alt="Wine1" />
        <div>
            <h2>Best Wine To Collect</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita pariatur repellat sunt voluptatem ut quisquam quibusdam veniam harum accusamus repellendus, quam quos dolores nemo, minima magnam officiis laborum doloremque quae?</p>
            <a href="https://www.vinovest.co/blog/best-wine-to-collect">Read More</a>
        </div>
      </div>

      <div className="wine1">
        <img src={Wine2} alt="Wine2" />
        <div>
            <h2>3 Types Of Collectible Wines</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita pariatur repellat sunt voluptatem ut quisquam quibusdam veniam harum accusamus repellendus, quam quos dolores nemo, minima magnam officiis laborum doloremque quae?</p>
            <a href="https://www.vinovest.co/blog/best-wine-to-collect">Read More</a>
        </div>
      </div>

      <div className="wine1">
        <img src={Wine3} alt="Wine3" />
        <div>
            <h2>7 Factors To Consider When Looking For Collectible Wines</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita pariatur repellat sunt voluptatem ut quisquam quibusdam veniam harum accusamus repellendus, quam quos dolores nemo, minima magnam officiis laborum doloremque quae?</p>
            <a href="https://www.vinovest.co/blog/best-wine-to-collect#3.-producer-reputation">Read More</a>
        </div>
      </div>

      <div className="wine1">
        <img src={Wine4} alt="Wine4" />
        <div>
            <h2>Optimal Wine Storage</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita pariatur repellat sunt voluptatem ut quisquam quibusdam veniam harum accusamus repellendus, quam quos dolores nemo, minima magnam officiis laborum doloremque quae?</p>
            <a href="https://www.vinovest.co/blog/best-wine-to-collect#7.-optimal-wine-storage">Read More</a>
        </div>
        
      </div>
    </div>
  )
}

export default Blog