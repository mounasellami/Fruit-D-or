import React from 'react';
import './Card.css';
import Rate from '../Rate';
import { Link } from 'react-router-dom';
import {Button } from "react-bootstrap";
import { useDispatch } from "react-redux"; //redux
import { deleteArticle, getArticle, toggleTrue } from '../../JS/actions/actionTask'; //redux

// const Card = (props.movie){             (props.movie.image) (props.movie.name) (props.movie.dat)  ...type, ...rating, ..description
const Card = ({ article, article : {image, name, date, type, rating, description}}) => {
  const dispatch = useDispatch(); //redux
  return (
    <Link to={`/Home/${name}`}>
      <div className='card'   background= "#141414" color=" #fff">
        <div className='card-img'>
          <img src={image} alt='poster'/>
        </div>
        <div className='card-intro'      background= "#141414" color= "#fff">
          <h2>{name}</h2>
          <div className='card-intro-details' style={{display:'flex', listStyleType:'none'}}>
            <ul>
              <li>{date}</li>
              <li>||</li>
              <li>{type}</li>
            </ul>
          </div>
          <div className='card-intro-rating'>
            <Rate rating={rating} />
          </div>
          <div className='card-intro-review'>
            <p>{description}</p>
            <a href="https://www.imdb.com/?ref_=nv_home"> Read more</a>
          </div>

            {/* button edit & delete for admin */}
            <div className="buttons">
                    <Link to='/Edit_Article'>
                        <Button variant="outline-primary edit-button"
                            onClick={() => {
                                dispatch(getArticle(article._id));
                                dispatch(toggleTrue())
                            }}>
                            Edit
                        </Button>
                    </Link>

                    <Button variant="outline-danger edit-button" onClick={() => dispatch(deleteArticle(article._id))} >Delete</Button>
                </div>


        </div>
      </div>     
    </Link>
  );
};

export default Card;