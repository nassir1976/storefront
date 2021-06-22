let productList = [
  {
    name: 'meeting owl pro',
    category: 'electronics',
    description: '18-foot audio pickup radius,8 smart microphones,Ability to connect 2 Owls',
    image:"http://source.unsplash.com/random?teacher",
    price: "$999",
    inventory: "10pcs",
  },
  {
    name: 'Belkin ',
    category: 'electronics',
    description: 'CHARGE Dual USB-A Wall Charger 24W',
    image:"http://source.unsplash.com/random?teacher",
    price: "$25",
    inventory: "27pcs",
  },
  {
    name: 'injera',
    category: 'food',
    description: 'ethiopian cousin',
    image:"http://source.unsplash.com/random?teacher",
    price: "$15.99",
    inventory: '200 meal',
  },
  {
    name: 'Doro Wati',
    category: 'food',
    description: 'spice ethiopiean food ',
    image:"http://source.unsplash.com/random?teacher",
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
