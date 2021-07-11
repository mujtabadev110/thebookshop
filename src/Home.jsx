import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTruck, faGlobe, faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CarouselItems from "./Components/CarouselItems";

import {Link} from "react-router-dom";
import HomeCardsSection from "./Components/HomeCardsSection";



const Home = () => {
    return(<>
    
<div className="main">


<div className="visible-md  hidden-xs ">
<div className = "icons-section-container mb-1" >

        <div className="icons-container mt-3 mb-2 "> 
            <div> <FontAwesomeIcon icon={faTruck} /> <span>Free Delivery!</span> </div> 
            <div> <FontAwesomeIcon icon={faGlobe} /> <span>Worldwide Shipping</span> </div>
            <div> <FontAwesomeIcon icon={faCheckCircle} /> <span>Original Books</span> </div>   
        </div>
  
        </div>
</div>

<div className="carousel-section-container">
<div> <CarouselItems/></div>
</div>
<hr />

<div className="card-section-container">
<div style={{display: "inline-block" , margin: '1rem' , color: "#444444" }}> <h1>English Literature</h1> </div>
<div style={{display: "inline-block" , float: 'right', margin: "1rem"} } ><Link to="/english"><button className="btn-dark btn-lg browse-btn" >Browse all</button></Link> </div>
<HomeCardsSection title="English" />

</div>
<hr />
<div className="card-section-container">

<div style={{display: "inline-block" , margin: '1rem' , color: "#444444" }}> <h1>Mathematics</h1> </div>
<div style={{display: "inline-block" , float: 'right', margin: "1rem"} } ><Link to="/maths"><button className="btn-dark btn-lg browse-btn" >Browse all</button></Link> </div>
<HomeCardsSection title="Math" />

</div>
<hr />

<div className="card-section-container">

<div style={{display: "inline-block" , margin: '1rem' , color: "#444444" }}> <h1>Programming</h1> </div>
<div style={{display: "inline-block" , float: 'right', margin: "1rem"} } ><Link to="/programming"><button className="btn-dark btn-lg browse-btn" >Browse all</button></Link> </div>
<HomeCardsSection title="Programming" />
</div>


</div>


    
    </>);
};

export default Home;