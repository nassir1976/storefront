 import React from 'react';
import './Header.scss';
import Paper from '@material-ui/core/Paper';

function Header (){
  return(
    <Paper elevation={5}>
      <header className="header">
      <h1> OUR STORE </h1>
      <nav>
        
      <p className="cart"> cart(0)</p>
      </nav>
      </header>
    </Paper>
  )
}




export default Header;
