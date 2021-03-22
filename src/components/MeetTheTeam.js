import React from 'react'
import '../row.css'
import Simbarashe from "./images/Simbarashe.jpg"
import Manasah from "./images/Manasah.jpg"
import Olwethu from "./images/Olwethu.jpg"
import Allan from "./images/Allan.jpg"
import Katlego from "./images/Katlego.jpg"
import Daneil from "./images/Daneil.jpg"
import Emilton from "./images/Emilton.jpg"
import Minenhle from "./images/Minenhle.jpg"
import Nokukhanya from "./images/Nokukhanya.jpg"

function MeetTheTeam({ image, description, title }) {
    return (
        <div>
          <div className="row_posters">

        
                <img 
                
                className="row_poster"
                src={Simbarashe} 
                />

<img 
                
                className="row_poster"
                src={Manasah} 
                />
                <img 
                
                className="row_poster"
                src={Olwethu}
                />
             <img 
                
                className="row_poster"
                src={Allan} 
                />
                 <img 
                
                className="row_poster"
                src={Nokukhanya} 
                />
                 <img 
                
                className="row_poster"
                src={Katlego} 
                />
                 <img 
                
                className="row_poster"
                src={Emilton} 
                />
                 <img 
                
                className="row_poster"
                src={Minenhle} 
                />
                 <img 
                
                className="row_poster"
                src={Daneil} 
                />
            
        </div>
        </div>
    )  
}

export default MeetTheTeam
