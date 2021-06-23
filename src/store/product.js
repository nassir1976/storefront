let productList = [
  {
    name: '1TB USB',
    category: 'electronics',
    description: 'white color',
    // url:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
    
    price: "$100.99",
    inventory: "10pcs",
  },
  {
    name: 'Belkin ',
    category: 'electronics',
    description: ' USB-A Wall Charger 24W',
    
    price: "$25",
    inventory: "27pcs",
  },
  {
    name: 'Monitor',
    category: 'electronics',
    description: 'Dell 24inch Monitor',
    price: "$150",
    inventory: "852pcs",
  },
  {
    name: 'Mouse',
    category: 'electronics',
    description: 'wired Black mouse',
    // image:'https://source.unsplash.com/random?products',
    price: "$50",
    inventory: "152pcs",
  },
  {
    name: 'Keyboard',
    category: 'electronics',
    description: 'Cherry LPOS QWERTY Keyboard ',
    
    price: "$50",
    inventory: "52pcs",
  },
  {
    name: 'TV',
    category: 'electronics',
    description: '55 inches samsung ',
    price: "$750",
    inventory: "52pcs",
  },
  {
    name: 'injera',
    category: 'food',
    description: 'ethiopian cousin',
    // url:"https://source.unsplash.com/random?product",
    price: "$15.99",
    inventory: '200 meal',
  },
  
  {
    name: 'Doro Wati',
    category: 'food',
    description: 'spice ethiopiean food ',
   
    price: "$22.00",
    inventory: "25 meal",
  },
]

let initialState = {
  products: [],
}

let newProducts

export default function ProductsReducer(state=initialState, action){
  let {type, payload} = action;

  switch(type){
    case "FILTER_PRODUCTS":
    newProducts = productList.filter(product => product.category === payload);

    return {products: newProducts};
    default: return state;
  }
}

export function changeproduct(name){
  return{
    type: "FILTER_PRODUCTS",
    payload: name,
  }
}
