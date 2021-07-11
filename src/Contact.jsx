import React from "react"

const Contact = () => {
    return(<>


<div className="container-fluid mt-5 ">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-xs-10 m-auto">
                    <div className="about-us-container">

                    <h1> Contact Us</h1><br/>

                    <form>

                    <div className="form-group mb-3">
                        <label for="exampleInputEmail1"><h5>Full Name</h5></label>
                            <input type="text" className="form-control" id="exampleFullName" aria-describedby="nameHelp" placeholder="Enter full name" />
                    </div>

                    <div className="form-group mb-3">
                        <label for="exampleInputEmail1"><h5>Email</h5></label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>

                    <div className="form-group mb-3">
                        <label for="exampleDescription"><h5>Enquiry</h5></label>
                            <textarea type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>


                <button type="submit" className="btn btn-lg btn-success mb-3 signin-btn">Submit</button>

                    </form>
                    
                    </div>
              
                </div>
            </div>
        </div>


    
    </>);
};

export default Contact;