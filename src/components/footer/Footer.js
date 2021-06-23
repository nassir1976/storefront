import React from 'react';
import './Footer.scss';
import Paper from '@material-ui/core/Paper';

function Footer (){
  return(
    <Paper elevation={5}>
      <footer className="footer">
      <h1>&copy; 2020 Javascript 401</h1>
      <h3>React + Redux + Material UI</h3>
      
      
      </footer>
    </Paper>
  )
}




export default Footer;
