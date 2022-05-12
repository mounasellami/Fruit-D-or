import React from 'react';
import './MoviesList.css';
import MovieCard from '../MovieCard/MovieCard';
import AddMovie from '../AddMovie/AddMovie';
import BackgroundVideo from "../../res/video/magasinFruitsDOr.mp4";

// const MoviesList = (props.moviesList , props.addMovie) => {
const MoviesList = ({moviesList, filterByName, filterByRate, addMovie}) => {
  return (
    <div>
      <div className="App-introduction" style={{marginTop:"11%"}}>
            {/*autoPlay: automaticallyStartVideo   loop: infiniteLoop  muted: turnsOffSound */}
        <video id="background-video" autoPlay   loop   muted >
            <source src={BackgroundVideo} alt="background video" type="video/mp4"/>
        </video>
        
        <div style={{padding:'3% 0 0 4%'}}>
          <h1 style={{color:'#f6f19c'}}>The Pursuit Of <br/>Happyness</h1>
          <p>A struggling salesman takes custody <br/> of his son as he's poised to begin a <br/>life-changing professional career.</p>
          <div style={{color:'white', display:'flex', marginTop:'1.5vw', lineHeight:'88%', position:'relative'}}>
            <button className="btn">Reading</button>
            <button className="btn btn-moreInformation">More informations</button>
          </div>
        </div>
      </div>

      <div className='movies-list'>
        {moviesList
        .filter(
          (el)=>el.name.toLowerCase().includes(filterByName.toLowerCase().trim()) && 
          el.rating>=filterByRate
        )
        .map((movie, i) => <MovieCard movie={movie} key={i}/>)}
        <AddMovie  addMovie={addMovie}/>
      </div>
    </div>
  );
};

export default MoviesList;