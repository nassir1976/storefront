import axios from 'axios';
// let productList = [

//   {
//     active: true,
//     category: 'food',
//     name: 'Taco',

//     description: 'Mexican hand-food',
//     price: "$2.50",
//     inventory: 100
//   },
//   {
//     active: true,
//     category: 'food',
//     name: 'Pizza',

//     description: 'Italian hand-food',
//     price: "$3.50",
//     inventory: 100
//   },
//   {
//     active: true,
//     category: 'food',
//     name: 'Hamburger',

//     description: 'American hand-food',
//     price: "$4.75",
//     inventory: 100
//   },
//   {
//     active: true,
//     category: 'food',
//     name: 'Chips',

//     description: 'Snacky hand-food',
//     price: "$1.25",
//     inventory: 100
//   },
//   {
//     active: true,
//     category: 'food',
//     name: 'Cookies',

//     description: 'Dessert hand-food',
//     price: "$2.00",
//     inventory: 100
//   },
//   {
//     active: true,
//     category: 'electronics',
//     name: 'Mouse',

//     description: 'Almost always better than a trackpad',
//     price: "$60.00",
//     inventory: 20
//   },
//   {
//     active: true,
//     category: 'electronics',
//     name: 'Monitor',

//     description: 'Display for a computer',
//     price: "$320.00",
//     inventory: 6
//   },
//   {
//     active: true,
//     category: 'electronics',
//     name: 'Keyboard',

//     description: 'Instrument of data entry',
//     price: "$180.00",
//     inventory: 12
//   },
//   {
//     active: true,
//     category: 'electronics',
//     name: 'Headset',

//     description: 'Computer communications equipment',
//     price: 80.00,
//     inventory: 20
//   },
//   {
//     active: true,
//     category: 'electronics',
//     name: 'Camera',

//     description: 'For images and/or video',
//     price: "$40.00",
//     inventory: 20
//   },
// ]

let initialState = {
  products: [],
  productList: [],

}

let newProducts

export default function ProductsReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {

    case "GET_FROM_API":
      console.log(payload.results)
      return {
        productList: payload.results,
        products: []
      }
    case "FILTER_PRODUCTS":
      // let newProductList = state.productList;
      newProducts = state.productList.filter(product => product.category === payload);

      return {
        products: newProducts,
        productList: state.productList
      };
    // default: return state;

    // case "ADD_TO_CART":
    //   let newList = state.products;
    //   newProducts = newList.filter(product => product.inStack !== 0);
    //   return { 
    //   products: newProducts, 
    //   productList: state.productList
    //  };
    default: return state;
  };
}

export const getFromApi = () => async (dispatch, getState) => {
  const response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  const data = response.data;
  dispatch({
    type: 'GET_FROM_API',
    payload: data
  })
}


// export const getFromApi = () => async(dispatch) => {
//   return  await axios.get('https://api-js401.herokuapp.com/api/v1/products')
//     .then(response => {
//       dispatch({
//         type: 'GET_FROM_API',
//         payload: response.data
//       })
//     })

// }



export function changeproduct(name) {
  return {
    type: "FILTER_PRODUCTS",
    payload: name,
  }
}
