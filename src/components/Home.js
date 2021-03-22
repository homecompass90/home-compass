import React from 'react'
import '../home.css'
import Typography from '@material-ui/core/Typography';
import HomeCards from "./HomeCards"





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
        Home Compass makes it possible for investirs to pay less and save more when investing in real estate Our blockchain system of transacting gives our userd full control of their real estate investment portfolio and makes it possible to invest in real estate with low risk and high returns
      </Typography>
      </div>

      <div className="info__cards">

      <HomeCards
       id="001"
       title="No need for Agent"
       description="Home Compass allows you to find your perfect home without the of an agent"
       image="https://i.pinimg.com/originals/77/9c/b0/779cb049e766c575095405801de32049.jpg"
     
        />    

        <HomeCards
       id="001"
       title="Blockchain Transacting"
       description="Deploy your cryptocurrency assests onto our platform and easily pay rent with our utility tokens, Bitcoin or Ethereum"
       image="https://www.aljazeera.com/wp-content/uploads/2020/11/2020-11-24T133928Z_788862449_RC2P9K9XL48K_RTRMADP_3_CRYPTO-CURRENCIES.jpg?resize=770%2C513"
     
        />  

        <HomeCards
       id="001"
       title="Take A Tour"
       description="Schedule a virtual tour on any apartment of your choice and get connected directly to a landlord"
       image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1Kr1Q2Tx7gsRGhcM7CEO7vQHZ0Ngea9Dig&usqp=CAU"
     
        />  
            

      </div>



      {/*This is "Our services" section */}
      <div className="choose__us">
          <h1>OUR SERVICES</h1>
          <div className="line"></div>
        </div>
        <div className="choose__para_div">
        <Typography variant="subtitle3" gutterBottom className="para">
        You may be looking to sell your property, get effective property evaluation or furniture removal services. Look no further. Home Compass will take care of it all.
         Sign up today and get your property listed, marketing of products and directly connected to customers
      </Typography>
      
      </div>


      <div className="info__cards">

      <HomeCards
       id="001"
       title="Rentals"
       description="Home Compass offers rental properties that are accessible and easy to understand. Save on realtor fees by paying with cryptocurrencies and without the need on an agent"
       image="https://3.bp.blogspot.com/-nNbYsAVqSRk/UcNbzXPOciI/AAAAAAAAUIg/AACguslzwGo/s1600/Modern_Luxury_House_In_Johannesburg_on_world_of_architecture_01.jpg"
     
        />    

        <HomeCards
       id="001"
       title="Property Management"
       description="Operate, manage and maintain properties. Eliminate the expense of monthly fees to an agent and take full control of your property"
       image="https://loveincorporated.blob.core.windows.net/contentimages/gallery/0bca9596-7842-49ae-a91f-1b4623283072-designer-kitchen-paul-evans-cabinet-marty-magna-chandelier.jpg"
     
        />  

        <HomeCards
       id="001"
       title="Investment"
       description="Easily invest in property shares. Use our smart contracts to directly connect with tenants buyers and property owners."
       image="http://cdn.home-designing.com/wp-content/uploads/2018/11/luxury-living-room-tables.jpg"
     
        /> 

        </div>

        <div className="line2">
        <h3  className="para2">
        Home Compass offers global access to property investment through peer-to-peer transactions.
         We market and facilitate transactions of the properties on land in developing countries so investors can see and buy these products or develop them for the low-income community.
      </h3>

        </div>

        <div className="expore">
          <h1>EXPLORE CONTINENTS</h1>
        </div>

        


        </div>
    )
}

export default Home
