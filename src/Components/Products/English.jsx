
import React from 'react'
import {Link} from 'react-router-dom'
import englishBook from "../../DB/englishBook.json"


const English = () => {
    return (
        <>
            <div className="container-fluid"  >

<div className="row">
  <hr/>

<div className="col-md-12" style={ {height: '5rem' , borderRadius: "0.5rem"} }>
<div style={{display: "inline-block" , margin: '1rem' , color: "#444444" }}> 
<h1 style={ { color: "#008248" ,fontWeight: "bold"} }>English Literature</h1> </div>
</div>

</div>

<div className="row">

{

            englishBook.map((book) => (
                
              <div className="col-md-4 col-sm-6 col-xs-12 ">
              <div key={englishBook._id} className="card"style={{height: 500}} >
              
              <Link to={`/product/${book._id}`}>
                    <img className="card-image-top" style={ {padding: 5 , width: "70%", marginLeft: "45px"} }
                        src = {book.image}
                        alt = {book.name} /></Link>

                      <div className="card-body">
                        <hr/>

                      <h4 className="card-title">{book.name}</h4>

                      <div className="price">${book.price}</div>

                      <Link className="btn btn-danger">Add to Cart </Link>

                    </div>
                </div>
              </div>

            ))
    } 

</div>
    
</div>
        </>
    )
}

export default English
