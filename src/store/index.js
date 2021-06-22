import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import categoriesReducer from "./categories.js";
import productsReducer from "./product";
// combine reducer .... products & categories  are 
const reducers = combineReducers({
  products:productsReducer,
  categories:categoriesReducer
})

const store =()=>{
  return createStore(reducers,composeWithDevTools());
}

export default store;