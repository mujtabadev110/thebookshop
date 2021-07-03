
import React from 'react'

const SignUp = () =>{

    return(
        <>
        
        <section className="signup">
        <div className="container mt-5">

            <h1 style={ {fontSize: "3em" , textAlign: "center" , marginBottom: ".5em" , fontWeight: "bold"} }>Create an account</h1>

        <div className="row">

        <div className="col-6 offset-3 signup-container">
       
        <h1 style={{fontWeight: "bold", marginBottom: ".5em"}}>SignUp</h1>

        <form className="signup-side m-auto">

        <div className="form-group mb-3">
            <label for="exampleInputFullname">Full Name</label>
            <input type="text" className="form-control" id="exampleInputFullname" aria-describedby="nameHelp" placeholder="Enter full name" />
        </div>

        <div className="form-group mb-3">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div className="form-group mb-3">
            <label for="exampleInputPhone">Phone Number</label>
            <input type="tel" className="form-control" id="exampleInputPhone" aria-describedby="phoneHelp" placeholder="Enter Phone Number" />
            <small id="phoneHelp" className="form-text text-muted">+92xxxxxxxxxx.</small>
        </div>

        <div className="form-group mb-3">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>

        <div className="form-group mb-3">
            <label for="exampleInputPassword2">Confirm Password</label>
            <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password" />
        </div>

            <div style={{display: "flex" , justifyContent:"center" , marginTop: "1.8em"}}>
            <button type="submit" className="btn btn-lg btn-success  signup-btn"> Create account</button>
            </div>
       

        </form>

        </div>

</div>

        </div>
        </section>
       
       
       
        </>
    )
}

export default SignUp;