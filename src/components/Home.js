import React from 'react'
import '../home.css'
import Typography from '@material-ui/core/Typography';




function Home() {

  

    return (
        <div>
          {/*Home banner image */}
            <img src="https://luxport-dev.s3.amazonaws.com/73076/1-1-EXT.jpg" alt=""
                className="homeImage"
            />

          {/*The tab buttons */}  
            <div className="tab__btns" >
           <button className="btns">Rent</button>
           <button className="btns">Buy</button>
           <button className="btns">Sell</button>
           </div>
        {/*This a seacrh form */}
      <div className="search__form">
        <form>
          <label>  
            <input type="text" name="name" className="input" placeholder="Location"/>
         </label>
         
         <select className="select__btns">
           <option>Property Type</option>
           <option>House</option>
           <option>Apartment</option>
           <option>Townhouse</option>
           <option>Commercial</option>
         </select>
         
         <select className="select__btns">
           <option>Max Price</option>
           <option>0</option>
           <option>100 000</option>
           <option>500 000</option>
           <option>1 000 000</option>
           <option>2 000 000</option>
           <option>3 000 000</option>
           <option>4 000 000</option>
           <option>5 000 000</option>
         </select>
         
         <select className="select__btns">
           <option>Bedrooms</option>
           <option>1+</option>
           <option>2+</option>
           <option>3+</option>
           <option>4+</option>
           <option>5+</option>
         </select>
          
         <select className="select__btns">
           <option>Bathrooms</option>
           <option>1+</option>
           <option>2+</option>
           <option>3+</option>
         </select>
         

      </form>
      </div>

      <div className="searchBtn__div">
        <button className="searchBtn">Search</button>
      </div>

        {/*This is choose us section */}
        <div className="choose__us">
          <h1>CHOOSE US</h1>
          <div className="line"></div>
        </div>
        <div className="choose__para_div">
        <Typography variant="subtitle3" gutterBottom className="para">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle3" gutterBottom className="para">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle3" gutterBottom className="para">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
      </div>
        </div>
    )
}

export default Home
