import React from 'react';
import './ArticlesList.css';
import Card from '../Card/Card';
import AddArticle from '../AddArticle/AddArticle';
import BackgroundVideo from "../../res/video/magasinFruitsDOr.mp4";

// const ArticlesList = (props.articlesList , props.addArticle) => {
const ArticlesList = ({articlesList, filterByName, filterByRate, addArticle}) => {
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

      <div className='articles-list'>
        { articlesList
          .filter(
            (el)=>el.name.toLowerCase().includes(filterByName.toLowerCase().trim()) && 
            el.rating>=filterByRate
          )
          .map((article, i) => <Card article={article} key={i}/>)
        }
        <AddArticle  addArticle={addArticle}/>
      </div>
    </div>
  );
};

export default ArticlesList;