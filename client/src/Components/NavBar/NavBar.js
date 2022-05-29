import React from 'react';
import './NavBar.css';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import LogoFruitDor from '../../res/img/LogoFruitDor.png';
import WhosWatchingMrBlue from '../../res/img/WhosWatchingMrBlue.png';
import WhosWatchingWafa from '../../res/img/WhosWatchingWafa.png';
import WhosWatchingMouna from '../../res/img/WhosWatchingMouna.png';
import WhosWatchingKids from '../../res/img/WhosWatchingKids.png';
import Rate from '../Rate';
import { Link } from 'react-router-dom';

const NavBar=({setFilterByName, filterByRate, setFilterByRate}) => {
  return (
    <header >
      <Navbar className='Navbar'
              bg="dark" /*transparent*/
              variant="dark"
              sticky="top" 
              expand="lg"   //sm resposive
              collapseOnSelect
        >
        <Navbar.Brand>
          <img
               src={LogoFruitDor}
               style={{mrginRight:'1.3rem', width:110, height:110}} 
               alt="logo"
               background="transparent"
          />
        </Navbar.Brand>
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav className='me-auto my-2 my-lg-0'>
            <Nav.Link href="Home"><Link to='/Home'>Home</Link></Nav.Link>
            <Nav.Link href="Fruits"><Link to='/Fruits'>Fruits</Link></Nav.Link>
            <Nav.Link href="Legumes"><Link to='/Legumes'>Légumes</Link></Nav.Link>
            <Nav.Link href="MicroPousse"><Link to='/MicroPousse'>Micro pousse</Link></Nav.Link>
            <Nav.Link href="Fleurs"><Link to='/Fleurs'>Fleurs</Link></Nav.Link>
            <Nav.Link href="Register"><Link to='/Register'>Register</Link></Nav.Link>
            <Nav.Link href="SignIn"><Link to='/SignIn'>Sign in</Link></Nav.Link>
          </Nav>
         
          <Nav>      
            <Form inline className="searchBox filters">
              <FormControl className="searchTitle" type="text" placeholder="Title" onChange={(e)=>setFilterByName(e.target.value)} />
              {/* <Button variant="danger">Search</Button> */}
              <FormControl className="icon-search"  value="Rechercher"  type="submit" />
            </Form>
          </Nav>

          <Nav>
            <Rate setFilterByRate={setFilterByRate} rating={filterByRate} />
          </Nav>

          <Nav>
            <NavDropdown className='justify-content-end' 
                         align="end"
                         width="52px"
                         height="32px"
                         title={
                            <div className="pull-left">
                              <img className="imgThumbnail" 
                                   src={WhosWatchingMrBlue}
                                   alt="user pic"
                                   style={{borderRadius:'13%', width:32, height:32}}
                              />
                            </div>
                          }  
            >
              <NavDropdown.Item href="#/Wafa">
                <img  className="imgThumbnail" 
                      src={WhosWatchingWafa}
                      alt="user pic"
                      style={{borderRadius:'13%', marginRight:'7%', width:32, height:32}}
                />
                Wafa
              </NavDropdown.Item>
              <NavDropdown.Item href="#/Mouna">
                <img  className="imgThumbnail" 
                      src={WhosWatchingMouna}
                      alt="user pic"
                      style={{borderRadius:'13%', marginRight:'7%', width:32, height:32}}
                />
                Mouna
              </NavDropdown.Item>
              <NavDropdown.Item href="#/Kids">
                <img  className="imgThumbnail" 
                      src={WhosWatchingKids}
                      alt="user pic"
                      style={{borderRadius:'13%', marginRight:'7%', width:32, height:32}}
                />
                Kids
              </NavDropdown.Item>
              <NavDropdown.Item href="#/Manage profiles">Manage profiles</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#/Account">Account</NavDropdown.Item>
              <NavDropdown.Item href="#/help Center">help Center</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#/Sign out">Sign out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default NavBar;