import React from 'react'
import img01 from '../Products/Image/Chamberlin.jpg'
import img02 from '../Products/Image/ChateauLafite.jpg'
import img03 from '../Products/Image/ChateauMargaux.jpg'
import img04 from '../Products/Image/ConternoBorolo.jpg'
import img05 from '../Products/Image/DOMPerignon.jpg'
import img06 from '../Products/Image/HarlanEstate.jpg'
import img07 from '../Products/Image/LeMont.jpg'
import img08 from '../Products/Image/Richebourg.jpg'
import img09 from '../Products/Image/ScreamingEagle.jpg'
import img10 from '../Products/Images/GrandCru2.jpg'
import img11 from "../Products/Images/MoscatoD'astri.jpg"
import img12 from '../Products/Images/PinotGrigio.jpg'
import img13 from '../Products/Images/PinotNoir.jpg'
import img14 from '../Products/Images/PremierCru.jpg'
import img15 from '../Products/Images/SauvignonBlanc.jpg'
import './product.css'



function Products() {
  return (
    <div>
        <h2 style={{textAlign:'center'}}>Our Products</h2>

        <br />
        <div className='product-flex'>
          <ProductsDetail 
              img={img01}
              name="Chamberlin"
              price= {78.55}
          
          />

          <ProductsDetail 
              img={img02}
              name="Chateau Lafite"
              price= {78.55}
          
          />

           <ProductsDetail 
              img={img03}
              name="Chateau Margaux"
              price= {78.55}
          
          />
          <ProductsDetail 
              img={img04}
              name="Conterno Borolo"
              price= {78.55}
          
          />
          <ProductsDetail 
              img={img05}
              name="Perignon"
              price= {78.55}
          
          />
          <ProductsDetail 
              img={img06}
              name="Harlan Estate"
              price= {78.55}
          
          />
          <ProductsDetail 
              img={img07}
              name="Le Mont"
              price= {78.55}
          
          />
          <ProductsDetail 
              img={img08}
              name="Richebourg"
              price= {78.55}
          
          />
          <ProductsDetail 
              img={img09}
              name="Screaming Eagle"
              price= {78.55}
          
          />
          <ProductsDetail 
              img={img10}
              name="Grand Cru"
              price= {78.55}
          
          />
          <ProductsDetail 
              img={img11}
              name="Moscato D'astri"
              price= {78.55}
          
          />
          <ProductsDetail 
              img={img12}
              name="Pinot Grigio"
              price= {78.55}
          
          />
          <ProductsDetail 
              img={img13}
              name="Pinot Noir"
              price= {78.55}
          
          />
          <ProductsDetail 
              img={img14}
              name="Premier Cru"
              price= {78.55}
          
          />
          <ProductsDetail 
              img={img15}
              name="Sauvignon Blanc"
              price= {78.55}
          
          />
        </div>
    </div>
  )
}

function ProductsDetail (props) {

  return(
    <div className='product-details'>
      <img src={props.img} alt="image" style={{width:"250px", height:"250px"}}/>
      <h2>{props.name}</h2>
      <p>${props.price}</p>
    </div>
  )
}

export default Products