//https://codepen.io/bydeinon/pen/OxryVo
import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

//let { h, render, Component } = preact;
/** @jsx h */

export default class Products extends Component {
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
        <section class="basket-container">
          <button class="cart-button" onClick={this.toggleCart}>
            <svg
              class="button__image"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
            </svg>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="red" />
              <text x="50%" y="70%" stroke="#ffffff" text-anchor="middle">
                {state.cart.items.length}
              </text>
            </svg>
          </button>
          <svg
              class="button__image"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
            </svg>

          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="red" />
              <text cx="10" cy="10" stroke="#808080">
                {state.cart.items.length}
              </text>
            </svg>

          <div class={`cart-container ${state.cartVisible ? "show" : "hide"}`}>
            <div class="cart__items">
              <h3>Items</h3>
              <ol>
                {state.cart.items.length > 0
                  ? this.getCartList().map(item => (
                      <li class="cart-item" key={item.price}>
                        {item.name} &times; {item.quantity}{" "}
                        <span class="delete" onClick={e => this.removeFromCart(item.name)}>Remove</span>
                      </li>
                    ))
                  : ''}
              </ol>
            </div>
            <div class="cart__total">
              <h3>Total</h3>
              $<span class="total__amount">
                {state.cart.total.toLocaleString()}
              </span>
            </div>
          </div>
        </section>
        <section>
          <div class="card-container">
            <div class="grid">
              {state.stock.map((item, i) => {
                return (
                  <div class="col">
                    <div class="card">
                      <div class={`card__image ${item.name.toLowerCase().split(" ")
                          .join("-")}`}></div>
                      <div class="card__description">
                        <h4 class="item-name">{item.name}</h4>
                        <p class="item-price">${item.price.toLocaleString()}</p>
                        {(state.stock.filter(e => e.name === item.name)[0].stockQuantity > 0)? <button class="btn-primary card__button" onClick={e => this.addToCart(item.name, item.price)}>Buy</button>: <div class="btn-secondary">Out of Stock</div>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
//render(<Main />, document.getElementById("app"));