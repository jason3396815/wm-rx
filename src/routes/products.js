//https://codepen.io/bydeinon/pen/OxryVo
import { connect } from 'preact-redux';
import { increment, decrement } from '../redux/actions';

import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

//let { h, render, Component } = preact;
/** @jsx h */
class Products extends Component {
  constructor() {
    super();
    this.state = {
      cartVisible: false,
      stock: [
        { name: "Travel Size Shampoo & Conditioner", price: 3, stockQuantity: 8 },
        { name: "Travel Size Toothpaste", price: 2, stockQuantity: 10 },
        { name: "Travel Size Contact Lens Solutions", price: 6.50, stockQuantity: 6 }
  ],
      cart: {
        items: [],
        total: 0
      }
    };
    this.toggleCart = this.toggleCart.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.getCartList = this.getCartList.bind(this);
    this.updateStock = this.updateStock.bind(this);
  }
  increment = () => {
    this.props.increment();
  }
  decrement = () => {
    this.props.decrement();
  }

  toggleCart() {
    const newStatus = !this.state.cartVisible;
    this.setState({ cartVisible: newStatus });
  }
  addToCart(name, price) {
    const indexOfStockItem = this.state.stock.findIndex(e => e.name === name);
    //     If there is stock left allow user to add item to basket.
    if (this.state.stock[indexOfStockItem].stockQuantity > 0) {

      const items = this.state.cart.items;
      const newItems = items;
      const itemToAdd = { name: name, price: price, quantity: 1 };
      newItems.push(itemToAdd);
      this.setState({ cart: { items: newItems } });
      this.getTotal();
                //     Update stock.
      this.updateStock(name, 'add');
            console.log(this.state.stock[indexOfStockItem].stockQuantity + " " + this.state.stock[indexOfStockItem].name + " left.");
    } else {
      console.log(
        "No more " + this.state.stock[indexOfStockItem].name + " left."
      );
      return;
    }
  }
  removeFromCart(name) {
    console.log('cart:', this.state.cart)
//     Cart item index.
    const indexOfStockItem = this.state.cart.items.findIndex(e => e.name === name);
//     Gets the quantity of the same item in the basket.
    const amountToAdd = this.state.cart.items.filter(e=>e.name===name).length;
//     Increase stock quantity.
    console.log('increase stock of '+ this.state.cart.items[indexOfStockItem].name + ' by '+amountToAdd);
          //     Update stock.
      this.updateStock(name, 'remove', amountToAdd);
    
//     Cart updated without item.
    const newCartItems = this.state.cart.items.filter(e => e.name !== name);

    this.setState({
      cart: { items: newCartItems, total: this.state.cart.total }
    });
    this.getTotal();
  }
  updateStock(name, type, amount = 0){
    function getQuantity(quantity){
      console.log('quantity to modify ', quantity)
      if(type==='add'){
        return quantity -= 1;
      } else if (type==='remove'){
        return quantity + amount;
      }
    }
    const updatedStock = this.state.stock.map((e, i) => {
        //           If item to add is same as element then return new item with decreased stock value, else return element.
        if (e.name === name) {
          return {
            name: e.name,
            price: e.price,
            stockQuantity: getQuantity(e.stockQuantity)
          };
        } else {
          return e;
        }
      });
      this.setState({ stock: updatedStock });
  }
  getCartList() {
    //       New item objects are returned with quantity property.
    const countedItems = this.state.cart.items.map(item => {
      //            Defines the quantity of the current item.
      const quantity = this.state.cart.items.filter(i => i.name === item.name)
        .length;
      return { name: item.name, price: item.price, quantity: quantity };
    });
    //       Removes duplicate objects.
    function removeDuplicates(array) {
      const unique = new Set(array.map(e => JSON.stringify(e)));
      return Array.from(unique).map(e => JSON.parse(e));
    }
    return removeDuplicates(countedItems);
  }
  getTotal() {
    if (this.state.cart.items.length > 0) {
      const cartTotal = this.state.cart.items
        .map(item => {
          return item.price * item.quantity;
        })
        .reduce((acc, curr) => acc + curr);
      const currentCart = this.state.cart;
      this.setState({ cart: { items: currentCart.items, total: cartTotal } });
    } else {
      this.setState({ cart: { items: [], total: 0 } });
    }
  }
  render({}, state) {
    return (
      <div class="container">
        <div>
          <h2>Counter</h2>
          <div>
            <button onClick={this.decrement}>-</button>
            <span>{this.props.count}</span>
            <button onClick={this.increment}>+</button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  increment,
  decrement
};

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
