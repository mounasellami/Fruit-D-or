import React from 'react';
import './Footer.css';

const Footer=() => {
   return(
        <footer>
            &copy; 2022-{new Date().getFullYear()} Fruit D'or.
        </footer>
    )
};

export default Footer;