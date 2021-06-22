
 //initial state 
let categoryList = [
  {
    name: 'electronics',
    displayName: 'ELECTRONICS',
    description: 'The Meeting Owl Pro is our premium 360-degree camera, mic, and speaker combined into one easy-to-use device.',
    active: false,
  },
  {
    name: 'food',
    displayName: 'FOOD',
    description: ' Delicious Ethiopian food',
    active: false,
  },
  // {
  //   name: 'cloth',
  //   displayName: 'CLOTH',
  //   description: 'NICE',
  //   active: false,
  // }
]
/// initial state 
let initialState = {
  categories:categoryList,
  activeCategory: [],
}

let activatedCategory;
let newCategories;

// REducer function //

export default function CategoriesReducer(state=initialState, action){
  // // action: { type: 'FOO', payload: 77 }
  let {type, payload} = action;

  switch(type){
    case "SWITCH_ACTIVE_CATEGORY":
    activatedCategory = state.categories.filter(category => category.name === payload)[0];
    newCategories = state.categories;
    return { ...state, activeCategory: activatedCategory, categories: newCategories};
    default: return state;
  }
}
 // Action Creatord

export function changecategory(name){
  return{
    type: "SWITCH_ACTIVE_CATEGORY",
    payload: name,
  }
}
