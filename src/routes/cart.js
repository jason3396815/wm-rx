// https://codepen.io/bydeinon/pen/OxryVo
import { connect } from 'preact-redux';
import { addToCart, remove } from '../redux/actions';
import { h, Component } from 'preact';

const stripe = Stripe('pk_test_CY6HxyQkOolO1B3h43MvkJE5');

class Cart extends Component {
  constructor (props) {
    super(props);
  }
  addToCart = (id) => {
    this.props.addToCart(id);
  }
  remove = (id) => {
    this.props.remove(id);
  }

  componentWillMount() {
    this.stripe = Stripe('pk_test_5oJxvpVNOZ2jsIheOoTGyvxi00OYUR60EZ');
    this.elements = this.stripe.elements();
    this.card = this.elements.create('card');

    this.responses = [];
    this.setState({ responses: [] });
  }
  componentDidMount() {
    this.card.mount('#cc-form');
  }
  PayNow = () => {
    let data = {}
    this.stripe.createToken(this.card).
      then(res => {
        this.responses.push(res.error ? `Error: ${res.error.message}` : `Token: ${res.token.id}`);
        data.profile = this.props.profile
        data.token = res.token.id
        data.cart = this.props.cart
        this.props.socket.emit('client:pay', data);

        /*fetch(g.serverURL+'/buy', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        })*/
        this.setState({ responses: this.responses.slice() });
      }).
      catch(err => {
        this.responses.push(err.message);
        this.setState({ responses: this.responses.slice() });
      });
  }

  getCartList = () => {
    const countedItems = this.props.cart.map(item => {
      return { name: item.name, price: item.price};
    });
  }
  render({}, state) {
    const addToCart = {
      cursor: 'pointer',
      color: 'black',
          backgroundColor: '#FFD700', //gold
    }
    const remove = {
      cursor: 'pointer',
      color: 'white',
			backgroundColor: 'red'
			}
    //console.log("cart:"+JSON.stringify(this.props.cart,null,2))
    let cart = this.props.cart
    return (
      <div class="container">
        <div class="cart__items">
          <h3 style="text-align: center">Items Available</h3><br />
          { this.props.items.map( item =>
              <div class="cart-item">
                {item.id}. {item.name}{"  "}${item.price}{"  "}
                <span style={addToCart} key={item.no}
                  onClick={()=>{this.addToCart(item.id)}}> Add To Cart </span>
              </div>
            )
          }
        </div>

        <div class="cart__items">
          <h3 style="text-align: center">Shopping Cart Contents</h3><br />
          { this.props.cart.map( item =>
              <div class="cart-item">
                {item.id}. {item.name}{"  "}${item.price}{",  Qty:"}{item.quantity}{"  "}
                <span style={remove} key={item.no} data-id={item.id} 
                onClick={()=>{this.remove(item.id)}}> Remove </span>
              </div>
            )
          }
        </div>
        <br />
        <div class="cart__total">
          <h3 style="text-align: center">Total</h3>
          <div style="text-align: center">${this.props.total}</div>
        </div><br />
        <div  style="margin:auto; text-align:center; max-width:350px">
          <div id="cc-form"></div>
            <input type="submit" value="Pay Now" onClick={() => this.PayNow()} />
            {this.state.responses.map(res => <div>{res}</div>)}
            <br /><br />
            {this.props.chargeMsg}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {dispatch(addToCart(id))},
    remove: (id) => {dispatch(remove(id))}

  }
};

function mapStateToProps(state) {
  return {
    items: state.items,
    cart: state.cart,
    total: state.total
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
