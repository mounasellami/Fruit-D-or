import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {moviesData} from './Components/MoviesData';
import MoviesList from './Components/MoviesList/MoviesList';
import Footer from './Components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Register from './Components/Register/Register';
import SignIn from './Components/SignIn/SignIn';
import UserProfile from './Components/UserProfile/UserProfile';
import Trailers from './Components/Trailers/Trailers';
import PrivateRoute from './Components/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [moviesList, setMoviesList]=useState(moviesData);
  const [filterByName, setFilterByName]=useState('');
  const [filterByRate, setFilterByRate]=useState(1);

  const [isAuth, setIsAuth]=useState(false);
  const signin = () => setIsAuth(true);
  const signup = () => setIsAuth(false);

  const addMovie = (newMovie) => setMoviesList([...moviesList, newMovie]);
  return (
    <div className="App" >
      <NavBar
        setFilterByName={setFilterByName}
        filterByRate={filterByRate}   setFilterByRate={setFilterByRate}
      />

      <Routes >
        {/* NOT CORRECT: <Route path='/Movies' element={ <PrivateRoute component={ <MoviesList moviesList={moviesList} filterByName={filterByName} filterByRate={filterByRate} addMovie={addMovie}/>} isAuth={isAuth}/>} /> */}
        <Route path='/Home' element={<PrivateRoute render={()=>(<MoviesList moviesList={moviesList}
                                                                            filterByName={filterByName}
                                                                            filterByRate={filterByRate} 
                                                                            addMovie={addMovie}
                                                                  />)
                                                            }
                                                      isAuth={isAuth}
                                        />}
        />
        <Route path='/Home/:name' element={<Trailers moviesData={moviesData} />}/> 
        
        {/*<Route path='/Fruits' element={ } />*/}
        {/*<Route path='/Légumes' element={< />} />*/}
        {/*<Route path='/MicroPousse' element={< />} />*/}
        {/*<Route path='/Fleurs' element={< />} />*/}
        
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