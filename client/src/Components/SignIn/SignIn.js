import React from 'react';
import './SignIn.css';
import { Container, Form, Button } from 'react-bootstrap';
import iconfacbook from "../../res/img/icon-facebook-48.png";
import icongoogle from "../../res/img/icon-google-48.png";

import { Link } from 'react-router-dom';

const SignIn=({isAuth,  signin, signup}) => {
  return (
    <div className= "Signindiv"> 
      <Container id= "SignIn-container"
                 className= "d-grid h-100" 
                 style= {{color: "#fff"}}>
       <Form id= "sign-in-from"
             className= "text-center w-100" style= {{alignItem: "center"}}>
         <h1 className= "mb-3 fs-3 fw-normal" style={{fontWeight: "700"}} > Sign in</h1>
        
         <Form.Group controlId="sign-in-email-address">
           <label>Email</label>
           <Form.Control type="email" 
                         placeholder="Email address"
                         size="lg"  //there is only small or large size
                         autoComplete="username"
                         className="position-relative" 
           />
           
         </Form.Group>
         <Form.Group controlId="sign-in-password" className="mb-3">
           <label>Password</label>
           <Form.Control type="password" 
                         placeholder="Password"
                         size="lg"  //there is only small or large size
                         autoComplete="current-passoword"
                         className="position-relative" 
           />
         </Form.Group>
         <Form.Group controlId="forgot-password-or-email-?"  className= "forgot-password" style={{fontWeight: "500", fontSize: "13px" }}>
           Forgot Password or Email ?
         </Form.Group>
         <Form.Group controlId="remember-me" className="d-flex  mb-3" style={{fontWeight: "500", fontSize: "13px" }}>
           <Form.Check label="Remember me" />
         </Form.Group>

         <div className= "d-grid " >
           {/* <Button variant="info" size="lg" className= "mb-2"> Sign in </Button> */}
           <Form inline>
             <Button variant="outline-info" className="signinBtn"
                onClick={isAuth ?  signup: signin}
              >
                {isAuth ? "Sign up" : "Sign in"}
             </Button>
            </Form>
         </div>
          <div className="divider">-------------- or sign in with --------------</div>
          <div className="icon-party d-flex " style={{fontWeight: "600", fontSize: "13px" }} >
            <div className='space'>
             <a variant="light" size="lg" className= "mb-4 mt-3" href="www.google.com"> 
               <img className="facebook-icon" src={iconfacbook} alt="fcb "/>
             </a>
           </div>
           <div>
             <a variant="light" size="lg" className= "mb-3"  href="www.google.com"> 
              <img className="google-icon" src={icongoogle} alt= "hello"/>
             </a>
           </div>
          </div>
          <div className="divider d-flex " style={{fontWeight: "500", fontSize: "13px" }} >
            Don't have an account? <Link to={`/Register`}> Register </Link>
          </div>
        </Form> 
      </Container>
   </div>
  );
};

export default SignIn;