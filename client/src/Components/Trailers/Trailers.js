import React from 'react';
import "./Trailers.css";
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Rate from '../Rate';

const Trailers=({moviesData})=> {
    const params = useParams()
    const navigate = useNavigate()
    const movie= moviesData.find(el=>el.name === params.name)
    
  return (
    <div>
      <div >
        <div style={{display: 'flex'}}>
          <img style={{width: 273, height: 584}} src={movie.image} alt='poster'/>
          {/* <video src={movie.video} alt='trailervideo'/> */}
          <iframe width="1520" height="585" 
                  src={movie.video}
                  alt='trailervideo' title="YouTube video player" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
        </div>
        <div className='card-intro'>
          <h2>{movie.name}</h2>
          <div className='card-intro-details' style={{display:'flex', listStyleType:'none'}}>
            <ul>
              <li>{movie.date}</li>
              <li>||</li>
              <li>{movie.type}</li>
            </ul>
          </div>
          <div className='card-intro-rating'>
            <Rate rating={movie.rating} />
          </div>
          <div className='card-intro-review'>
            <p>{movie.description}</p>
          </div>
          <Button className="btn" onClick={()=>navigate(-1)}>Go Back</Button> 
        </div>
      </div>       
    </div>
  )
}

export default Trailers
