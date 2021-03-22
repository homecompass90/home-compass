import React, {useState} from 'react'
import '../createlisting.css'
import TextField from '@material-ui/core/TextField';
import add from "./images/add.png"
import image__icon from "./images/image__icon.png"
import upload from "./images/upload.png"
import file from "./images/file.png"
import Checkbox from '@material-ui/core/Checkbox';





function CreateListing() {

  
    return (
        <div>
          <form className="listing__form">
          <div className="form__div">
          
              <label className="labels">
              Property Name*
              <input type="text" name="name" className="property__name"/>
              </label>
              <label className="labels">
              Email Address*
              <input type="text" name="" className="email" />
              </label>
        <div className="dropdowns">
          <select className="selects">
           <option>Property Type</option>
           <option>House</option>
           <option>Apartment</option>
           <option>Townhouse</option>
           <option>Commercial</option>
         </select>
         
         <select className="selects">
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
         
         <select className="selects">
           <option>Bedrooms</option>
           <option>1+</option>
           <option>2+</option>
           <option>3+</option>
           <option>4+</option>
           <option>5+</option>
         </select>
          
         <select className="selects">
           <option>Bathrooms</option>
           <option>1+</option>
           <option>2+</option>
           <option>3+</option>
         </select>

         <select className="selects">
           <option>SQFT</option>
           <option>1+</option>
           <option>2+</option>
           <option>3+</option>
         </select>
         <select className="selects">
           <option>Monthly</option>
           <option>1+</option>
           <option>2+</option>
           <option>3+</option>
         </select>
         <select className="selects">
           <option>Deposit</option>
           <option>1+</option>
           <option>2+</option>
           <option>3+</option>
         </select>
         </div>
         </div>
         
         <h1  className="Description">Property Description</h1>
          <div className="text__box">
          <TextField className="property_Description__box"
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={7}
          defaultValue="Type a short description of the property with a minimum of 140 characters "
          variant="outlined"
        />
        </div>
        <div className="input__rapper">
        <div className="image__field">
        <img className='add__image' id="side__image" src={image__icon}></img>
        </div>
          <div className="input__div">
          <label>
          <img className='add__image' src={add}></img>
              <input type="file" className="file__input"/>
              <h1 className="add__photo">ADD PHOTO</h1>
         </label>
         </div>
         <div className="image__field2">
         <img className='add__image' id="side__image" src={image__icon}></img>
         </div>
         </div>


         <div className="pet__section">
           <h1 className="pet__policy">Pet Policy</h1>
         <div className="check__div">
              <label  className="check__label" for="male">No Pet Allowed <i class="fas fa-do-not-enter"></i></label>
              <input type="checkbox" className="chk" id="chk"/>         
          </div>
          <div className="check__div">
              <label  className="check__label" for="male">Dogs Allowed <i class="fas fa-dog"></i></label>
              <input type="checkbox" className="chk" id="chk"/>         
          </div>
          <div className="check__div">
              <label className="check__label" for="male">Cats Allowed <i class="fas fa-cat"></i></label>
            <input type="checkbox" className="chk" id="chk" />         
        </div>
        </div> 
          
          <div>
          
          </div>

        <div className="amenity__select__div"><h1  className="Description">Amenities</h1>
        <h3  className="tag__line">List all amenities your property has</h3>
          <select className="amenity__select">
           <option>WIFI</option>
           <option>House</option>
           <option>Apartment</option>
           <option>Townhouse</option>
           <option>Commercial</option>
         </select>
         </div>


         <div className="sharevideo__div">
          <h1 className="Description">3D View & Virtual Tours</h1>
          <div className="upload__div">
          <label>
          <img className='add__image' src={upload}></img>
              <input type="file" className="file__input"/>
              <h3 className="add__pdf">Upload A Video Of Your property</h3>
              <h3 className="add__pdf">Max file Size: 20MB</h3>
         </label>         
          </div>
         </div>

         <h1  className="Description">Property Floor Plans</h1>
          <div className="floor__plans__div">
          <label>
          <img className='floor__plan__image' src={file}></img>
              <input type="file" className="file__input"/>
              <h3 className="add__pdf">Drop Your Files Here Or <span id="browse" className="add__pdf">Browse</span></h3>
              <h3 className="add__pdf">Max file Size: 10MB</h3>
         </label>  
          </div>
         
          <h1  className="Description">Available From:</h1>
          <div className="available__from__div">
          <label>
              <input type="text" className="available" placeholder="DD/MM/YYYY"/>
         </label> 
          </div>

          <div className="listnow__div">
              <button className="list__btn">List Now!</button>
              <h4 className="policy">By clicking "List Now" you agree our <span id="requirements">Listing Requirements</span></h4>
          </div>

         </form>
         
         
        </div>
        
    )
}

export default CreateListing
