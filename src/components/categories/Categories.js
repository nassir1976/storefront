import React from 'react';
import { connect } from 'react-redux';
import {changecategory} from '../../store/categories.js';
import {changeproduct} from '../../store/product.js'
import './Categories.scss';
import { Button } from '@material-ui/core';




const Categories = (props) => {
  // cast the vote in the store...
  // dispatch the category action
  // props.vote(person);

  console.log(props)


  return (
    < div >
      <h2 className ="head">Browse our Products by Category</h2>

      {
        props.categories.map((category, idx) => {
          return (
            <Button style={{ margin :'0 6px 0 0',fontFamily:"cursive",  color: 'green'}} variant="contained" color="primary" key={idx} onClick={() => { props.changecategory(category.name); props.changeproduct(category.name); }} title={category.name}>{category.displayName}</Button>
            
          )
        })}
    </div >
  )
}
const mapStateToProps =(state)=>{
  return{
    activeCategory:state.categories.activeCategory,
    categories:state.categories.categories
  }
}
//action
const mapDispatchToProps={
  changecategory,
  changeproduct,
}
export default connect (mapStateToProps, mapDispatchToProps)(Categories);


