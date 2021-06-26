import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import CartReducer from "./cart.js";
import categoriesReducer from "./categories.js";
import productsReducer from "./product";



// combine reducer .... products & categories  are 
const reducers = combineReducers({
  categories:categoriesReducer,
  products:productsReducer,
  // categories:categoriesReducer,
  cart:CartReducer
})

const store =()=>{
  return createStore(reducers,composeWithDevTools());
}

export default store;