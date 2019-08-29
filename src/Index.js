// redux tutorials:
// https://daveceddia.com/redux-tutorial/
// https://medium.com/@ayabellazreg/make-a-simple-shopping-cart-app-using-react-redux-part-2-88117cf1c069

import { Provider, connect } from 'preact-redux';
import { h, render, Component } from 'preact';
import App from './App';
import { createStore } from 'redux';

const initialState = {
  count: 0,
  items: [
    {id:1,name:'Winter body', desc: "Minima, ex.", price:110,img:''},
    {id:2,name:'Adidas', desc: "Minima, ex.", price:80,img: 'Item2'},
    {id:3,name:'Vans', desc: "Minima, ex.",price:120,img: 'Item3'},
    {id:4,name:'White', desc: "Minima, ex.", price:260,img:'Item4'},
    {id:5,name:'Cropped-sho', desc: "Minima, ex.", price:160,img: 'Item5'},
    {id:6,name:'Blues', desc: "Minima, ex.",price:90,img: 'Item6'}
  ],
  cart:[],
  total: 0
};

function reducer(state = initialState, action) {
  console.log('reducer', state, action);
  switch(action.type) {
    case 'ADD_TO_CART': {
      let item = state.items.find(item=> item.id === action.id)
      let existingItem = state.cart.find(item=> action.id === item.id)
      if (existingItem) {
        item.quantity += 1
        return {
          ...state,
          total: state.total + item.price
        }
      }
      else {
        item.quantity = 1
        let newTotal = state.total + item.price 
        return{
          ...state,
          cart: [...state.cart, item],
          total : newTotal
        }
      }
    }
    case 'REMOVE': {
      let item = state.items.find(item=> item.id === action.id)
      let newTotal = state.total - item.price 
      let newCart = state.cart.filter(item => action.id != item.id)
      return{
        ...state,
        cart: newCart,
        total : newTotal
      }
    }
    case 'ADD_QUANTITY': {
      let item = state.items.find(item=> item.id === action.id)
      item.quantity += 1
      let newTotal = state.total + item.price
      return {
        ...state,
        total: newTotal
      }
    }
    default: return state;
  }
}

const store = createStore(reducer);

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

render( <Main />, document.getElementById('root') );
