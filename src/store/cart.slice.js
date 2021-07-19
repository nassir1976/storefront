import axios from "axios";
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice ({
  name: 'cart',
  initialState: {
    cart: [],
    count: 0
  },
  reducers:{
    
      add( state, action ) {
        state.push( {cart: action.payload })
      },
      removeFromCart( state, action) {
        return state.filter( cart => cart.name !== action.payload )
      }
    }
  
  });



//   switch (type) {
//     case "ADD_TO_CART":
//     if (!state.cart.includes(payload)) {
//         newCart = [...state.cart, payload]
//       } else {
//         newCart = [...state.cart]
//       }
//       return { cart: newCart, count:state.count +1  };

//     /// remove from cart///
//     case "REMOVE_FROM_CART":
    
//     let updatedCart = state.cart.filter((item) => {
//     if (item.name === payload.name ) {
//      return false;
//         } else {
//           return true
//         }
//       })

//       return { ...state, count:state.count -1, cart: [...updatedCart] }
//     default: return state;
//   }
// }

export const { add } = cartSlice.actions;

export const addToCart = (name) => async (dispatch) =>{
  let item = {...name};
  if(item.inStock > 0){
    item.inStock --; 
  }
  await axios({
    method: 'put',
    url: `https://api-js401.herokuapp.com/api/v1/products/${name._id}`,
    data: item,
  });
    dispatch(add(item));
}

export default cartSlice.reducer;