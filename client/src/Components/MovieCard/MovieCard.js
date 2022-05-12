import React from 'react';
import './MovieCard.css';
import Rate from '../Rate';
import { Link } from 'react-router-dom';

// const MovieCard = (props.movie){             (props.movie.image) (props.movie.name) (props.movie.dat)  ...type, ...rating, ..description
const MovieCard = ({movie: {image, name, date, type, rating, description}}) => {
  return (
    <Link to={`/Home/${name}`}>
      <div className='card'   background= "black" color=" #fff">
        <div className='card-img'>
          <img src={image} alt='poster'/>
        </div>
        <div className='card-intro'      background= "black" color= "#fff">
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
        </div>
      </div>     
    </Link>
  );
};

export default MovieCard;
