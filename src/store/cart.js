

//  initial state 


let initialState = {
  cart: [],
  count: 0,
}
let newCart;


// REducer function //
export default function CartReducer(state = initialState, action) {
  // add to cart//

  let { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      state.count++;
      payload.count++;

      if (!state.cart.includes(payload)) {
        newCart = [...state.cart, payload]
      } else {
        newCart = [...state.cart]
      }
      return { cart: newCart, count: state.count };

    /// remove from cart///
    case "REMOVE_FROM_CART":
      state.count--;
      let temp = [...state.cart]
      let deleteOneItem = true;
      let updatedCart = temp.filter((item) => {
        if (item === payload && deleteOneItem) {
          deleteOneItem = false;
          return false;
        } else {
          return true
        }
      })

      return { ...state, cart: [...updatedCart] }
    default: return state;
  }
}
// Action Creatord

export function addToCart(name) {
  return {
    type: "ADD_TO_CART",
    payload: name,

  }
}


//action create 
export function removeFromCart(name) {
  return {
    type: "REMOVE_FROM_CART",
    payload: name,
  }
}

















