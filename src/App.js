import React from 'react';
import {Provider} from 'react-redux';
import Header from './components/header/Header.js';
import  Container  from '@material-ui/core/Container';
import './App.css';
import Footer from './components/footer/Footer.js';
import Products from './components/products/Products.js';
import Categories from './components/categories/Categories';
import store from './store/index.js';
import Cart from  './components/cart/Cart.js';

function App() {
  return (
    // <Provider store={store}>
    <Container>
       <Provider store={store()}>
    <Header></Header>
    <Categories></Categories>
    <Products></Products>
    <Cart></Cart>
      
    <Footer></Footer>
    </Provider>
    </Container>
  
  );
}

export default App;
