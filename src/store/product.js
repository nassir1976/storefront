
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
