import React, { useState } from 'react';
import './Register.css';
  import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import BackgroundVideo from "../../res/video/magasinFruitsDOr.mp4";
import iconfacbook from "../../res/img/icon-facebook-48.png";
import icongoogle from "../../res/img/icon-google-48.png";
import Loader from "../Loader";
import { registerUser } from '../../JS/actions/actionTask';
import { useDispatch, useSelector } from 'react-redux';

const Register = ({isAuth}) => {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const loading = useSelector(state => state.reducerTask.loading);

  const register = (e) => {
    e.preventDefault();
    const newUser = { fullName, email, phone, password }


    dispatch(registerUser(newUser));
    setFullName('');
    setEmail('');
    setPassword('');
    setPhone('');
  }
    return loading ? (<Loader />) : (
    <div className= "Registerdiv"> 
      {/*autoPlay: automaticallyStartVideo   loop: infiniteLoop  muted: turnsOffSound */}
      {/* <video id="background-video" autoPlay   loop   muted >
            <source src={BackgroundVideo} alt="background video" type="video/mp4"/>
      </video> */}
      <Container id= "SignIn-container"
                 className= "d-grid h-100" 
                 style= {{color: "#fff"}}>
       <Form id= "sign-in-from"
             className= "text-center w-100" style= {{alignItem: "center"}}>
         <h1 className= "mb-3 fs-3 fw-normal" style={{fontWeight: "700"}} > Register</h1>
         <Form.Group controlId="sign-in-email-address">
           <label>Full name</label>
           <Form.Control type="Full name" 
                         placeholder="Full name"
                         size="lg"  //there is only small or large size
                         autoComplete="username"
                         className="position-relative" 
                         onChange={(e)=>setFullName(e.target.value)}
           />
         </Form.Group>
         <Form.Group controlId="sign-in-email-address">
           <label>Email</label>
           <Form.Control type="email" 
                         placeholder="Email address"
                         size="lg"  //there is only small or large size
                         autoComplete="username"
                         className="position-relative" 
                         onChange={(e)=>setEmail(e.target.value)}
           />
         </Form.Group>
         <Form.Group controlId="sign-in-Phone">
           <label>Phone</label>
           <Form.Control type="Phone" 
                         placeholder="Phone"
                         size="lg"  //there is only small or large size
                         autoComplete="Phone"
                         className="position-relative"
                         onChange={(e)=>setPhone(e.target.value)} 
           />
         </Form.Group>
         <Form.Group controlId="sign-in-password" className="mb-3">
           <label>Password</label>
           <Form.Control type="password" 
                         placeholder="Password"
                         size="lg"  //there is only small or large size
                         autoComplete="current-passoword"
                         className="position-relative"
                         onChange={(e)=>setPassword(e.target.value)} 
           />
         </Form.Group>

         <div className= "d-grid " >
           <Button variant="info" size="lg" className= "mb-2" onClick={register}> Sign in </Button>
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
            Don't have an account? <Link to={`/SignIn`}> Sign in </Link>
          </div>
        </Form> 
      </Container>
  </div> );
};

export default Register;