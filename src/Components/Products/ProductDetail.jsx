import React from 'react'
import englishBook from "../../DB/englishBook.json"
import mathsBook from "../../DB/mathsBook.json"
import programmingBook from "../../DB/programmingBook.json"
import { Link } from 'react-router-dom'

const ProductDetail = (props) => {

   

        const productId = props.match.params._id;


        let newId = productId.toString();
            let result = {};
         if(newId.charAt(0)==="1"){

             result = englishBook.find( ( x ) => x._id === productId.toString() );
          
         }
         
            
        else if(newId.charAt(0)==="2"){
            result = mathsBook.find( ( x ) => x._id === productId.toString() );
        }

        else if(newId.charAt(0)==="3"){
            result = programmingBook.find( ( x ) => x._id === productId.toString() );
        }

        
        
    return (
        <>
                  <hr/>

                            <div className="container-fluid mt-5">

                         <div className="row mb-5">

                                <div className="col-md-5 offset-md-1">
                                <div className="product-image-container">
                                    <img style={ {height: 450} }
                                        src={result.image}
                                        alt={result.name}
                                        />

                                </div>
                                </div>


                            <div className="col-md-5">

                                <div className="product-detail-container">

                                <div className="product-name">
                                     <h1>{result.name}</h1>
                                </div>

                                 <div className="author-name">
                                    <h3>{result.author} (author)</h3>
                                    </div>

                                <div className="product-desc">
                                    <p>{result.description}</p>
                                </div>

                                <div className="product-price">
                                 <p>Price : ${result.price}</p>
                                </div>
                                <div className="product-counter">
                                 <button className="btn btn-success">+</button><span>&nbsp;</span>
                                 <input type="number" name="qty" value="1" disabled style={ {width:"42px", height: "35px", textAlign: "center"} } /><span>&nbsp;</span>
                                 <button className="btn btn-danger">-</button>
                                </div><br/>
                                <div className="produnct-detail-btn">
                                    <button type="button" className="btn btn-outline-danger product-cart-btn">ADD TO CART</button> <span>&nbsp;</span>
                                    <Link to="/cart"><button type="button" className="btn btn-outline-success product-buy-btn">BUY NOW</button></Link>
                                </div>

                            </div>
        
                        </div>

                    </div>

        
                            <div className="row">

                                <div className="col-md-8 offset-md-1">
                      
                                <ul className="nav nav-tabs bg-light" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="deatail-tab" data-bs-toggle="tab" data-bs-target="#detail" type="button" role="tab" aria-controls="detail" aria-selected="true">Details</button>
                                    </li>

                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="moreinfo-tab" data-bs-toggle="tab" data-bs-target="#moreinfo" type="button" role="tab" aria-controls="moreinfo" aria-selected="false">More Information</button>
                                    </li>

                                </ul>

                            <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="detail" role="tabpanel" aria-labelledby="detail-tab">

                                <p>{result.details}</p></div>

                                    <div className="tab-pane fade" id="moreinfo" role="tabpanel" aria-labelledby="moreinfo-tab">

                            <table class="table table-bordered">

                                <tbody>
                                     <tr>
                                     <th scope="row">Book publisher</th>
                                        <td>{result.moreInfo.publisher}</td>
                                    </tr>
                                    <tr>
                                     <th scope="row">Publication date</th>
                                        <td>{result.moreInfo.date}</td>
                                    </tr>
                                <tr>
                                <th scope="row">Format</th>
                                    <td>{result.moreInfo.format}</td>
                                </tr>
                                <tr>
                                <th scope="row">Pages</th>
                                    <td>{result.moreInfo.pages}</td>
                                </tr>
                                    </tbody>
                                    </table>
                                    </div>
                   
                                 </div>

                                </div>

                                </div>

                        </div>

                        </> 
    )
}

export default ProductDetail
