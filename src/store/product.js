// let productList = [
//   {
//     name: '1TB USB',
//     category: 'electronics',
//     description: 'white color',
//     price: "$100.99",
//     inventory: "10pcs",
//   },
//   {
//     name: 'Belkin ',
//     category: 'electronics',
//     description: ' USB-A Wall Charger 24W',
//     price: "$25",
//     inventory: "27pcs",
//   },
//   {
//     name: 'Monitor',
//     category: 'electronics',
//     description: 'Dell 24inch Monitor',
//     price: "$150",
//     inventory: "852pcs",
//   },
//   {
//     name: 'Mouse',
//     category: 'electronics',
//     description: 'wired Black mouse',
//     price: "$50",
//     inventory: "152pcs",
//   },
//   {
//     name: 'Keyboard',
//     category: 'electronics',
//     description: 'Cherry LPOS QWERTY Keyboard ',
//     price: "$50",
//     inventory: "52pcs",
//   },
//   {
//     name: 'TV',
//     category: 'electronics',
//     description: '55 inches samsung ',
//     price: "$750",
//     inventory: "52pcs",
//   },
//   {
//     name: 'injera',
//     category: 'food',
//     description: 'ethiopian cousin',
//     price: "$15.99",
//     inventory: '200 meal',
//   },

//   {
//     name: 'Doro Wati',
//     category: 'food',
//     description: 'spice ethiopiean food ',

//     price: "$22.00",
//     inventory: "25 meal",
//   },
// ]

// let initialState = {
//   products: [],
// }

// let newProducts

// export default function ProductsReducer(state=initialState, action){
//   let {type, payload} = action;

//   switch(type){
//     case "FILTER_PRODUCTS":
//     newProducts = productList.filter(product => product.category === payload);

//     return {products: newProducts};
//     default: return state;
//   }
// }

// export function changeproduct(name){
//   return{
//     type: "FILTER_PRODUCTS",
//     payload: name,
//   }
// }


let productList = [

  {
    active: true,
    category: 'food',
    name: 'Taco',
    
    description: 'Mexican hand-food',
    price: "$2.50",
    inventory: 100
  },
  {
    active: true,
    category: 'food',
    name: 'Pizza',
    
    description: 'Italian hand-food',
    price: "$3.50",
    inventory: 100
  },
  {
    active: true,
    category: 'food',
    name: 'Hamburger',
   
    description: 'American hand-food',
    price: "$4.75",
    inventory: 100
  },
  {
    active: true,
    category: 'food',
    name: 'Chips',
    
    description: 'Snacky hand-food',
    price: "$1.25",
    inventory: 100
  },
  {
    active: true,
    category: 'food',
    name: 'Cookies',

    description: 'Dessert hand-food',
    price: "$2.00",
    inventory: 100
  },
  {
    active: true,
    category: 'electronics',
    name: 'Mouse',
    
    description: 'Almost always better than a trackpad',
    price: "$60.00",
    inventory: 20
  },
  {
    active: true,
    category: 'electronics',
    name: 'Monitor',
    
    description: 'Display for a computer',
    price: "$320.00",
    inventory: 6
  },
  {
    active: true,
    category: 'electronics',
    name: 'Keyboard',
    
    description: 'Instrument of data entry',
    price: "$180.00",
    inventory: 12
  },
  {
    active: true,
    category: 'electronics',
    name: 'Headset',
   
    description: 'Computer communications equipment',
    price: 80.00,
    inventory: 20
  },
  {
    active: true,
    category: 'electronics',
    name: 'Camera',
    
    description: 'For images and/or video',
    price: "$40.00",
    inventory: 20
  },
]

let initialState = {
  products: [],
}

let newProducts

export default function ProductsReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "FILTER_PRODUCTS":
      newProducts = productList.filter(product => product.category === payload);

      return { products: newProducts };
    default: return state;
  }
}

export function changeproduct(name) {
  return {
    type: "FILTER_PRODUCTS",
    payload: name,
  }
}
