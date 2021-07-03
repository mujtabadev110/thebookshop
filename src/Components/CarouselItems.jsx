import React from "react";
import {Carousel} from "react-bootstrap"



const CarouselItems = () =>{
    return(
            <>

            <div className="container-fluid  carousel_bg mb-3">
              <div className="row ">
                  <div className="col-12" >


  <Carousel>

      <Carousel.Item>
    <img
      className="d-block w-100"
      src="./images/carousel01.jpg"
      alt="First slide"
      style={{height: 430}}
    />

  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="./images/carousel02.jpg"
      alt="Second slide"
      style={{height: 430}}
    />

  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="./images/carousel03.jpg"
      alt="Third slide"
      style={{height: 430}}
    />

  </Carousel.Item>

</Carousel>

        </div>
     </div>
  </div>

        </>
    )

}

export default CarouselItems;
