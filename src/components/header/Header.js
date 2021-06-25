 import React from 'react';
import './Header.scss';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

function Header (props){
  return(
    <Paper elevation={5}>
      <header className="header">
      <h1> OUR STORE </h1>
      <nav>
        
      <p className="cart"> cart ({props.cart.count})</p>
      {/* cart {props.cart.length}cart ... */}
      </nav>
      </header>
    </Paper>
  )
}
const mapStateToProps = (state) => {

  return {

    cart:state.cart
  }
}
const mapDispatchToProps = {

 
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);





