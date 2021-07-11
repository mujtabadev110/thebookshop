import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/jquery";


import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import English from "./Components/Products/English";
import Maths from "./Components/Products/Maths";
import Programming from "./Components/Products/Programming";

import NavbarItem from "./Components/Navbar";

import SignIn from "./Components/Signin";
import SignUp from "./Components/Signup"

import Footer from "./Components/Footer";
import AllProducts from "./Components/Products/AllProducts";
import ProductDetail from "./Components/Products/ProductDetail";
import Cart from "./Components/Products/Cart";






const App = () => {
    return(< >

<NavbarItem/>

    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />

        <Route exact path="/english" component={English} />
        <Route exact path="/maths" component={Maths} />
        <Route exact path="/programming" component={Programming} />
        <Route exact path="/products" component={AllProducts} />

        <Route exact path="/product/:_id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} /> 
        
        <Route exact path="/contact" component={Contact} />

        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />

        <Redirect to="/" />

       
    </Switch>
           
    <Footer />


    </>);
};

export default App;