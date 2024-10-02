import React from 'react'
import './Home.css'
import imgtesting from '../WineTesting.jpg'
import imgreview from '../WineReview.jpg'
import imgeduc from '../WineEducational.jpg'
{/* Images for Events*/}
import Monaco from '../Home/Monaco.jpg'
import Milan from '../Home/Milan.jpg'
import MonacoEvent1 from '../Home/MonacoEvent1.jpg'
import MonacoEvent2 from '../Home/MonacoEvent2.jpg'
import MilanEvent1 from '../Home/MilanEvent1.jpg'
import MilanEvent2 from '../Home/MilanEvent2.jpg'
import white from '../Home/WhiteWine.jpg'
import red from '../Home/RedWine.jpg'
import Collection from '../Home/WineCollect.jpg'




function Home() {
  return (
    <div style={{textAlign: 'center'}}>
        <h1>
            Welcome to Vino Tinto Collect
        </h1>
        <br />
        <h2>
            Our Services
        </h2>
        <div className="container">
            <Card  
                  img={imgtesting}
                  title=' Wine Tasting Events'
                  description='Organize and promote wine tasting events, both virtual and in-person'
                  link="https://www.vinovest.co/blog/white-wine-glasses"
            />
    
            <Card  
                  img={imgreview}
                  title=' Wine Selection and Reviews'
                  description=' Offer a curated list of wines with detailed descriptions, ratings, and user reviews.'
                  link="https://www.vinovest.co/blog/white-wine-glasses"
            />
    
            <Card  
                  img={imgeduc}
                  title='Educational Resources'
                  description='Offer a library of resources, including articles, video tutorials, and blogs on wine education. '
                  link='https://www.vinovest.co/blog/best-wine-to-collect'
            />
        </div>
        <br />
        <br />
        <br />
        <div className="event-container">
            <h2>Our Last Events</h2>
            
            <div className=''>
                <div className="event">
                    <img src={Monaco} alt="Monaco" width="450px" height="250px" />
                    <img src={MonacoEvent1} alt="MonacoEvent1" width="350px" height="250px"/>
                    <img src={MonacoEvent2} alt="MonacoEvent2" width="350px" height="250px"/>
                </div>
                <h2>MIlan</h2>
                <p>Italy</p>
            </div>

            <br />
            <br />

            <div>
                <div className="event-milan">
                
                        
                        <img src={MilanEvent1} alt="MilanEvent1" width="350px" height="250px"/>
                        <img src={MilanEvent2} alt="MilanEvent2"
                        width="350px" height="250px"/>
                        <img src={Milan} alt="Milan" width="450px" height="250px"/>
                </div>
                <h2>Monaco</h2>
                <p>France</p>
            </div>
           
        </div>

        <br />
        <br />

        <div className="blog">
            <h2>New Blog</h2>
            <div className="blog-container">
                <div className="bog1">
                    <img src={white} alt="WhiteWine" width="300px" height="200px"/>
                    
                    <h2>5 Best White Wine Glasses</h2>
                    <p>Serving your precious Chardonnay or Semillon wine in the right glass could make the difference between discovering it’s full potential and merely drinking it. This article explores the different kinds of white wine glasses that you can buy. </p>
                    <a href="https://www.vinovest.co/blog/white-wine-glasses">Read More</a>
                </div>
                <div className="bog2">
                    <img src={red} alt="RedWine" 
                    width="300px" height="200px"
                    />
                    <h2>10 Best Red Wine Brands 2024</h2>
                    <p>There's a red wine for every occasion - whether you're a wine connoisseur or a beginner! You could relish a cheery young Beaujolais Nouveau at your dinner table, or wait for a fine Bordeaux to age to perfection in your cellar for decades.</p>
                    <a href="https://www.vinovest.co/blog/red-wine-brands">Read More</a>
                </div>
                <div className="bog3">
                    <img src={Collection} alt="Wine" 
                    width="300px" height="200px"
                    />
                    <h2>The Ultimate Guide To Wine Storage</h2>
                    <p>Building a Wine Collection takes considerable time, money, and effort.And, climate-controlled wine storage is an essential aspect without which your precious bottles may lose their taste and market value over time.</p>
                    <a href="https://www.vinovest.co/blog/wine-storage">Read More</a>
                </div>
            </div>
            <br />
            <br />
        </div>
    </div>
  )
}

function Card (props) {

    return(

        <div className="container-card">
            <img src={props.img} alt="image" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a href={props.link}>Read More</a>
            
        </div>
        
        
    )
}


export default Home