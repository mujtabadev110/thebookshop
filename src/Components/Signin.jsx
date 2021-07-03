import {Link} from "react-router-dom"
import React from 'react'


const SignIn = () =>{

    return(
        <>
        
        <section className="signin">
        <div className="container mt-5">

        <div className="row">

        <div className="col-6 offset-3 login-container">
       
        <h1>LogIn</h1>

        <form className="login-side m-auto">

        <div className="form-group mb-3">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group mb-3">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Keep me signed in.</label>
        </div>

        <div className="mb-3">
            <Link><h5  style={{color : "#008248"}}>Forgot your Password? Click here..</h5></Link>
            
        </div>

            <button type="submit" className="btn btn-lg btn-success mb-3 signin-btn">Sign in</button>

        </form>

        </div>

</div>

<div className="row">
    <div className="col-6 offset-3 mt-5 signup-container mb-5" style={ {background: "rgba(212,233,226,.33)" , textAlign: "center"} }>
        <h3>Can't Have Account Yet?</h3>
        <h3>Don't Worry Create a New One..</h3><br/>
        <button type="submit" className="btn btn-lg btn-success mb-3 signin-btn">Sign up</button>
    
    </div>
</div>
        </div>
        </section>
       
       
       
        </>
    )
}

export default SignIn;