import axios from "axios";

import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories:[],
    activeCategory: [],
  },
  reducers:{
    addCategories(state,action){
      state.categories = action.payload.data.results;
    },
    changecategory(state, action){
      state.activeCategory = state.categories.filter(category => category.name === action.payload)[0];
    }
  }
})

export const { addCategories, changecategory } = categoriesSlice.actions;

export const getCategories = () => async (dispatch) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories')
  dispatch(addCategories(response));
}

export default categoriesSlice.reducer;