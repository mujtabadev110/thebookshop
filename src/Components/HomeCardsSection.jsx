import React,  {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'




const HomeCardsSection = (props) => {

        const [cardData , setCardData] = useState([]);

        const allCardData = async () => {

            if(props.title === 'English'){
                const response = await require('../DB/englishBook.json');
                setCardData( response);
            }
            else if(props.title === 'Math'){
                const response = await require('../DB/mathsBook.json');
                setCardData( response);
            }
            else if(props.title === 'Programming'){
                const response = await require('../DB/programmingBook.json');
                setCardData( response);
            }

            
            
            
        };

         useEffect(() => {
            
             allCardData();
         }, []);

       
    return (
        <>

            <div className="row m-5">

                   { cardData.slice(0 ,3).map( (curElem) =>{

                       return (

                                                                
            <div className="col-md-4 col-sm-6 col-xs-12 ">
                <div key={cardData._id} className="card"style={{height: 500}} >

                    <Link to={`/product/${curElem._id}`}>
                    <img className="card-image-top" style={ {padding: 5 , width: "70%", marginLeft: "45px"} }
                        src = {curElem.image}
                        alt = {curElem.name} /></Link>

        <div className="card-body">
            <hr/>

        <h4 className="card-title">{curElem.name}</h4>

        <div className="price">${curElem.price}</div>

        <Link className="btn btn-danger">Add to Cart </Link>

        </div>
</div>
</div>


)
                           
                   }) 
                   
                   } 

            </div>
            
        </>
    )
}

export default HomeCardsSection
