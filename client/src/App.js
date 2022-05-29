import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Components/NavBar/NavBar';
import {articlesData} from './Components/ArticlesData';
import ArticlesList from './Components/ArticlesList/ArticlesList';
import Fruits from './Components/Fruits/Fruits';
import Legumes from './Components/Legumes/Legumes';
import MicroPousse from './Components/MicroPousse/MicroPousse';
import Fleurs from './Components/Fleurs/Fleurs';
import Register from './Components/Register/Register';
import SignIn from './Components/SignIn/SignIn';
import Footer from './Components/Footer/Footer';
import UserProfile from './Components/UserProfile/UserProfile';
import Trailers from './Components/Trailers/Trailers';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  const [articlesList, setArticlesList]=useState(articlesData);
  const [filterByName, setFilterByName]=useState('');
  const [filterByRate, setFilterByRate]=useState(1);

  const [isAuth, setIsAuth]=useState(false);
  const signin = () => setIsAuth(true);
  const signup = () => setIsAuth(false);

  const addArticle = (newArticle) => setArticlesList([...articlesList, newArticle]);

  return (
    <div className="App" >
      <NavBar
        setFilterByName={setFilterByName}
        filterByRate={filterByRate}   setFilterByRate={setFilterByRate}
      />

      <Routes >
        {/* NOT CORRECT: <Route path='/Movies' element={ <PrivateRoute component={ <ArticlesList articlesList={articlesList} filterByName={filterByName} filterByRate={filterByRate} addArticle={addArticle}/>} isAuth={isAuth}/>} /> */}
        <Route path='/Home' element={<PrivateRoute render={()=>(<ArticlesList articlesList={articlesList}
                                                                              filterByName={filterByName}
                                                                              filterByRate={filterByRate} 
                                                                              addArticle={addArticle}
                                                                />)
                                                          }
                                                      isAuth={isAuth}
                                        />}
        />
        <Route path='/Home/:name' element={<Trailers ArticlesData={articlesData} />}/> 
        
        <Route path='/Fruits' element={<Fruits />} />
        <Route path='/Legumes' element={<Legumes />} />
        <Route path='/MicroPousse' element={<MicroPousse />} />
        <Route path='/Fleurs' element={<Fleurs />} />
        
        <Route path='/Register' element={ <Register isAuth={isAuth} signin={signin} /> } />
        {/* <Route path='/Register' element={<Register isAuth={isAuth} signup={signup} signin={signin} />} />   */}
        <Route path='/SignIn' element={<SignIn isAuth={isAuth} signup={signup} signin={signin} />} />
        <Route path='/UserProfile' element={<UserProfile />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;