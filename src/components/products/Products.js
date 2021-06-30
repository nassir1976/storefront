import {useEffect} from 'react';
import React from 'react';
import { connect } from 'react-redux';
import { changeproduct, getFromApi } from '../../store/product.js';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import {addToCart} from '../../store/cart.js'




import './Products.scss';

const useStyles = makeStyles({
  root: {
    // maxWidth: 150,
    width:325,
    maxHeight:525
  },

  media: {
    height: 150,
  },
  buttonContainer: {
   display:'flex',
   justifyContent:'space-evenly',
   paddingLeft:20,
   paddingRight:20,
  backgroundColor:'pink',
  // width:85,
  // color:'yelow'

  }


})
// const dispatch = useDispatch();


 

function Products(props) {
const classes = useStyles();
// const dispatch = useDispatch();
useEffect(() => {
  props.getFromApi();
},[]);

return (
    < div className="products">
      <h2>{props.category.displayName}</h2>
      <h2 className="description">{props.category.description}</h2>

      {props.products.map((product, i) => {
        return (
          <Card key={i} className={classes.root}>
            <CardActionArea className={classes.keyboard}>
              <CardMedia
                className={classes.media}
                image={`https://source.unsplash.com/random?${product.name}`}
              // title ='Product picture'

              />

              <CardContent className="content">

                <Typography gutterBottom variant="h5" component="h2">
                  product name:{product.name}
                </Typography>

                <Typography gutterBottom variant="h5" component="h2">
                  price:{product.price}
                </Typography>

                <Typography gutterBottom variant="h5" component="h2">
                  description:{product.description} description here
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  IN STOCK:{product.inStock}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.buttonContainer}>
              <Button className="addButton" onClick={() => props.addToCart(product)} size="small" color ="primary">
                ADD TO CART
              </Button>
              <Button size="small" color ="primary">
                VIEW DETAILS
              </Button>

            </CardActions>
          </Card>
        )
      })}
    </div >
  )
}
const mapStateToProps = (state) => {

  return {

    products: state.products.products,
    category: state.categories.activeCategory
  }
}
const mapDispatchToProps = {

  changeproduct,
  addToCart,
  getFromApi
 
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);


