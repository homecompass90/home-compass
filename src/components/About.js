import React, { useState, useEffect } from 'react'
import about__image from "./images/about__image.png"
import Typography from '@material-ui/core/Typography';
import meet__team from "./images/meet__team.png"
import "../about.css"
import MeetTheTeam from './MeetTheTeam';

function About() {



    return (
        <div>
           {/*About page banner image */}
           <img src={about__image} alt=""
                className="AboutImage"
            />

            {/*This is about us section */}
        <div className="about__us">
          <h1>Home Compass</h1>
          <div className="line"></div>
        </div>
        <div className="about__para_div">
        <Typography variant="subtitle3" gutterBottom className="para">
        We started Home Compass to enable access for low-income communities to wealth building tools in property investment. 
        These tools were previously available exclusively to high net-worth individuals. Our platform allows low-income communities and individuals previously rejected by the industry, to invest in real estate through the buying and owning of properties without the need of middlemen. Through our innovative technology, we give investors the opportunity to invest with low risk, and retain high returns. The Home Compass process cuts off middlemen such as real estate agents, reducing costs of investment.
        We believe in the longevity of the property industry and its power to improve the affordable housing crisis, by allowing ownership of a fraction of property.
      </Typography>
      </div>


         {/*This is choose us section */}
         <div className="about__us">
          <h1>Our Mission</h1>
          <div className="line"></div>
        </div>
        <div className="about__para_div">
        <Typography variant="subtitle3" gutterBottom className="para">
        We are a mission-orientated team building powerful technology to disrupt the status quo and tackle the affordable housing crisis, starting with fractional property ownership.
        Our primary focus is on reducing costs for both investors and homeowners. Our team brings diverse industry experience in real estate finance, private equity, law and technology.
         We were brought together by a shared vision of transforming real estate investment through technology, providing a new level of access to private transactions and streamlining the rental, management and investment process. While our business and the technology we build has continued to evolve, our mission remains the same: to empower the low income community and individual investor. 
        We believe in the transformative power of technology and recognise the our platform is as good as the people, community and experience behind it. 
        That is why we obsess over cost efficiency, minimizing fees, peer-to peer transactions and developing smarter tools that provide better insights. We are committed to transparency and reducing the affordable housing crisis.
        Home Compass isn't traditional real estate investment platform; it's an experiencce. Our team is dedicated to create a community where relationships are built around trust, diversity, accessibility and value.
        </Typography>
      </div>

          {/*About page banner image */}
          <img src={meet__team} alt=""
                className="AboutImage2"
            />

         <MeetTheTeam/> 

        </div>
    )
}

export default About
