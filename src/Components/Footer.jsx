import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

const  Footer = () => {


    return (
        <div>
               
                <div className="container-fluid m-3 footer-container"> <hr/>
                    <div className="row ">

                        <div className="col-md-4 col-sm-4 col-xs-12 justify-content-center text-center">
                            <h1><span>The Book Shop</span></h1>
                            <p>The BookShop is the online bookshop for The Readers and The Observer. 
                                We have over 150 titles available to buy,
                                 and can ship all around the world.</p>
                            
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-12  justify-content-center text-center">
                        <h1><span>Products</span></h1>
                        <Link to="/english">English Literature</Link><br/>
                        <Link to="/programming">Programming &amp; Computing</Link><br/>
                        <Link to="/maths">Mathematics</Link><br/>
                        </div>

                        <div className="col-md-4 col-sm-4 col-xs-12 justify-content-center text-center">
                        <h1> <span>Contact &amp; Support</span> </h1>
                        <p>For complaints and feedbak : </p>
                        <a href="mailto:mujtaba.bcs18@iba-suk.edu.pk">mujtaba.bcs18@iba-suk.edu.pk</a>
                        <br/>

                        <FontAwesomeIcon icon = {faFacebook} size='2x' style= { {margin: ".3em", color: "blue"} } className="footer-icons" />
                        <FontAwesomeIcon icon = {faInstagram} size='2x' style= { {margin: ".3em" , color: "black"} } className="footer-icons"/>
                        <FontAwesomeIcon icon = {faWhatsapp} size='2x' style= { {margin: ".3em", color: "green"} } className="footer-icons"/>
                        
                     
                        </div>


                    </div>
                    <hr/>
                    <div className="row ">
                        <div className="col-12 ">
                            <div className= "justify-content-center text-center">
                            <span>Copyright &copy; 2021, The Book Shop, All Rights Reserved.</span>
                            </div>
                            
                        </div>

                    </div>

                </div>

            
            
        </div>
    )
}

export default Footer;
