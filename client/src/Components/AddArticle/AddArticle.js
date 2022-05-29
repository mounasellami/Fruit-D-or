import React, {useState,   useEffect} from 'react'; // ***
import Modal from 'react-modal'; //npm i react-modal
import './AddArticle.css';

import { useDispatch, useSelector } from "react-redux"; // ***
import { Link } from 'react-router-dom'; // ***
import { addArticle , editArticle } from '../../JS/actions/actionTask'; // ***

Modal.setAppElement('#root');   // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const AddArticle = () => {
    
    const [modalIsOpen, setIsOpen] = useState(false);
    // const [image, setImage] = useState(''); /*preferably all things declared as ones in hooks*/
    // const [name, setName] = useState('');
    // const [type, setType] = useState('');
    // const [rating, setRating] = useState(0);
    // const [bienfaits, setBienfaits] = useState('');
    // const [prix, setPrix] = useState('');
    const openModal=()=> { setIsOpen(true) };
    const closeModal=()=> { setIsOpen(false) };
    // const handleSubmit = () => {
    //     let newArticle = { image, name, type, rating, bienfaits, prix}
    //     AddArticle(newArticle);
    //     setIsOpen(false);
    //     setImage(''); setName(''); setType(''); setRating(0); setBienfaits(''); setPrix('');
    // }


    const [newArticle, setNewArticle] = useState({
        image: "", name: "", type: "", rating: "", bienfaits: "", prix: ""
    }); // ***
    const dispatch = useDispatch(); // ***
    const articleId = useSelector(state => state.articleId); // ***
    const isEdit = useSelector(state => state.isEdit); // ***
    useEffect(() => {
       if (isEdit) {
           setNewArticle(articleId)
       } else {
          setNewArticle({
            image: "", name: "", type: "", rating: "", bienfaits: "", prix: ""
          })
       }
    }, [isEdit, articleId]); // ***
    const handelChange = (e) => {
        setNewArticle({ ...newArticle, [e.target.name]: e.target.value })
    }; // ***

  return (
    <div>
      <div className='Add-btn-container'> 
        <button className='Add-btn'  onClick={openModal}> + </button>
        <Modal
          className='add-modal'
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          {isEdit ? "Edit Article" : "Add New Article"} {/* *** */}

          <h2 className='AddArticle-h2'>Add article</h2>
          <form>
                <label>Image d'article:</label>
                <input type='url' name='image' required
                   //    controlId="formBasicBienfaits" 
                   //    value={image}
                   //    onChange={(e)=>setImage(e.target.value)}              
                   value={newArticle.image} 
                   onChange={handelChange} 
                   placeholder="Enter your image"
                />

               <label>Nom d'article:</label>
               <input type='text' name='name' required
                    //   value={name}
                    //   onChange={(e)=>setName(e.target.value)}
                    value={newArticle.name} 
                    onChange={handelChange} 
                    placeholder="Enter your name"
                />

                <label>Taux d'article:</label>
                <div className='rating-search'>
                   <input type='number' name='rating' required min="1" max="5"
                        //   value={rating}
                        //   onChange={(e)=>setRating(e.target.value)}
                        value={newArticle.rating} 
                        onChange={handelChange} 
                        placeholder="Enter your rating" 
                   /> 
                </div>

                <label>Type d'article:</label>
                <input type='text' name='type' required
                    //    value={type}
                    //    onChange={(e)=>setType(e.target.value)}
                    value={newArticle.type} 
                    onChange={handelChange}
                    placeholder="Enter your type"  
                /> 

                <div style ={{display:'flex'}}>            
                  <label>Les bienfaits d'article:</label>
                  <textarea type='text' name='bienfaits' required
                            // value={bienfaits}
                            // onChange={(e)=>setBienfaits(e.target.value)}
                            value={newArticle.bienfaits} 
                            onChange={handelChange} 
                            placeholder="Enter your bienfaits" 
                   />
                </div>

                <label>Prix d'article:</label>
                <input type='number' name='prix' required
                    //    value={prix}
                    //    onChange={(e)=>setPrix(e.target.value)}
                       value={newArticle.prix} 
                       onChange={handelChange} 
                       placeholder="Enter your prix" 
                />
           </form>

           <Link to='/Home'> {/* *** */} 
               <button className='Modal-btn' variant="outline-primary edit-button"
                    //    onClick={handleSubmit}>
                    onClick={() => { isEdit ? dispatch(editArticle(newArticle._id, newArticle)) : dispatch(addArticle(newArticle)) }   } // *** 
                >
                    {isEdit ? "Save" : "Add"} {/* *** */}
                    Submit
               </button>
          </Link>

          <button className='Modal-btn' variant="outline-danger edit-button" 
                  onClick={closeModal} 
           >
            Close
          </button>
       </Modal>
      </div> 
    </div>
  );
}

export default AddArticle;

/*
import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { addArticle, editArticle } from '../../JS/actions/actionTask';
import './AddArticle.css';

const AddArticle = () => {

    const [newArticle, setNewArticle] = useState({
        image: "",
        name: "",
        type: "",
        bienfaits: "",
        prix: ""
    })

    const dispatch = useDispatch()
    const articleId = useSelector(state => state.articleId)
    const isEdit = useSelector(state => state.isEdit)

    useEffect(() => {
        if (isEdit) {
            setNewArticle(articleId)
        } else {
            setNewArticle({
                image: "",
                name: "",
                type: "",
                bienfaits: "",
                prix: ""
            })
        }
    }, [isEdit, articleId])

    const handelChange = (e) => {
        setNewArticle({ ...newArticle, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Card
                    style={{
                        width: "22rem",
                        height: "25rem",
                        marginRight: "30px",
                        marginBottom: "20px",
                        marginTop: "30px",
                        backgroundColor: "white",
                        borderRadius: "8px",
                        border: "transparent",
                        boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
                        
                    }}
                    >
                    <Card.Header
                        style={{
                            borderTopRightRadius: "8px",
                            borderTopLeftRadius: "8px",
                            backgroundColor: "#277fa5",
                            color: "white",
                        }}
                    >
                        {isEdit ? "Edit Article" : "Add New Article"}
                    </Card.Header>

                    <Card.Body>
                        <Card.Text>
                            <Form>
                                <Form.Group controlId="formBasicBienfaits" style={{ textAlign: "left" }}>
                                    <Form.Label >image :</Form.Label>
                                    <Form.Control type="text" image="image" value={newArticle.image} onChange={handelChange} placeholder="Enter your image" />
                                </Form.Group>

                                <Form.Group controlId="formBasicBienfaits" style={{ textAlign: "left" }}>
                                    <Form.Label >name :</Form.Label>
                                    <Form.Control type="text" name="name" value={newArticle.name} onChange={handelChange} placeholder="Enter your name" />
                                </Form.Group>

                                <Form.Group controlId="formBasicBienfaits" style={{ textAlign: "left" }}>
                                    <Form.Label >type :</Form.Label>
                                    <Form.Control type="bienfaits" name="bienfaits" value={newArticle.bienfaits} onChange={handelChange} placeholder="Enter your bienfaits" />
                                </Form.Group>

                                <Form.Group controlId="formBasicBienfaits" style={{ textAlign: "left" }}>
                                    <Form.Label >bienfaits :</Form.Label>
                                    <Form.Control type="type" name="type" value={newArticle.type} onChange={handelChange} placeholder="Enter your type" />
                                </Form.Group>

                                <Form.Group controlId="formBasicBienfaits" style={{ textAlign: "left" }}>
                                    <Form.Label >prix :</Form.Label>
                                    <Form.Control type="text" name="prix" value={newArticle.prix} onChange={handelChange} placeholder="Enter your prix" />
                                </Form.Group>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                    <div className="buttons">
                        <Link to='/Home'>
                            <Button variant="outline-primary edit-button"
                                onClick={() => { isEdit ? dispatch(editArticle(newArticle._id, newArticle)) : dispatch(addArticle(newArticle)) }
                                } >
                                {isEdit ? "Save" : "Add"}
                            </Button>
                        </Link>
                        <Button variant="outline-danger edit-button">Cancel</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default AddArticle;
*/



/*
***Modal***
import React, {useState} from 'react'; 
import Modal from 'react-modal'; //npm i react-modal
import './AddArticle.css';

Modal.setAppElement('#root');   // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const AddArticle = ({addArticle}) => {
    
    const [modalIsOpen, setIsOpen] = useState(false);
    const [image, setImage] = useState(''); 
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [rating, setRating] = useState(0);
    const [bienfaits, setBienfaits] = useState('');
    const [prix, setPrix] = useState('');
    const openModal=()=> { setIsOpen(true) };
    const closeModal=()=> { setIsOpen(false) };
    const handleSubmit = () => {
        let newArticle = { image, name, type, rating, bienfaits, prix}
        AddArticle(newArticle);
        setIsOpen(false);
        setImage(''); setName(''); setType(''); setRating(0); setBienfaits(''); setPrix('');
    }

  return (
    <div>
      <div className='Add-btn-container'> 
        <button className='Add-btn'  onClick={openModal}> + </button>
        <Modal
          className='add-modal'
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >

          <h2 className='AddArticle-h2'>Add article</h2>
          <form>
                <label>Image d'article:</label>
                <input type='url' name='image' required
                   value={image}
                   onChange={(e)=>setImage(e.target.value)}
                />

               <label>Nom d'article:</label>
               <input type='text' name='name' required
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                />

                <label>Taux d'article:</label>
                <div className='rating-search'>
                   <input type='number' name='rating' required min="1" max="5"
                          value={rating}
                          onChange={(e)=>setRating(e.target.value)}
                   /> 
                </div>

                <label>Type d'article:</label>
                <input type='text' name='type' required
                       value={type}
                       onChange={(e)=>setType(e.target.value)}
                /> 

                <div style ={{display:'flex'}}>            
                  <label>Les bienfaits d'article:</label>
                  <textarea type='text' name='bienfaits' required
                            value={bienfaits}
                            onChange={(e)=>setBienfaits(e.target.value)}
                   />
                </div>

                <label>Prix d'article:</label>
                <input type='number' name='prix' required
                       value={prix}
                       onChange={(e)=>setPrix(e.target.value)}
                />
           </form>

            <button className='Modal-btn'  onClick={handleSubmit}>  
                Submit
            </button>
          </Link>

          <button className='Modal-btn' onClick={closeModal} >
            Close
          </button>
       </Modal>
      </div> 
    </div>
  );
}

export default AddArticle;
*/
