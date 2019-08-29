//https://medium.com/@everdimension/how-to-handle-forms-with-just-react-ac066c48bd4f
import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Refill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datasent: false
          };
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleAckChange = this.handleAckChange.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const firstname = form.firstname.value;
        const lastname = form.lastname.value;
        const birthdate = form.birthdate.value;
        const phone = form.phone.value;
        const rx1 = form.rx1.value;
        const rx2 = form.rx2.value;
        const rx3 = form.rx3.value;
        const rx4 = form.rx4.value;
        const rx5 = form.rx5.value;
        const rx6 = form.rx6.value;
        const rx7 = form.rx7.value;
        const rx8 = form.rx8.value;
        const rx9 = form.rx9.value;
        const rx10 = form.rx10.value;
        const delivery = form.delivery.value;
        const comment =form.comment.value;
        let data = `firstname=${firstname}&lastname=${lastname}&birthdate=${birthdate}&phone=${phone}`;
        data = data + `&rx1=${rx1}&rx2=${rx2}&rx3=${rx3}&rx4=${rx4}&rx5=${rx5}`;
        data = data + `&rx6=${rx6}&rx7=${rx7}&rx8=${rx8}&rx9=${rx9}&rx10=${rx10}`;
        data = data + `&delivery=${delivery}&comment=${comment}`;
        fetch('http://192.168.0.100:3001/content/', {
          method: 'POST',
          headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
          },
          body: data
        });
        this.setState({ datasent: true });
    }
	render() {
		return (
			<div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Refill Your Prescriptions</h1>
                    First Name:<input name="firstname" type="text"/><br />
                    Last Name:<input name="lastname" type="text"/><br />
                    Birth Date:<input name="birthdate" type="text" placeholder="MM/DD/YYYY" /><br />
                    Phone Number:<input name="phone" type="text" placeholder="(xxx) xxx-xxxx" /><br />

                    <h3>Enter Prescription Numbers:</h3>
                    <p>Don't know your prescription numbers? Enter names of your medicines in the comments box below.<br /><br />
                    Did not fill Rx from us? Call us to transfer your prescriptions.</p>
                    (six digit numbers)<br />
                    {/*#1:<input id="rx1" name="rx1" type="number" placeholder="xxxxxx" pattern="\d{6}" required /><br />*/}
                    #1:<input id="rx1" name="rx1" type="number" placeholder="xxxxxx" pattern="\d{6}" /><br />
                    #2:<input id="rx2" name="rx2" type="number" placeholder="xxxxxx" /><br />
                    #3:<input id="rx3" name="rx3" type="number" placeholder="xxxxxx" /><br />
                    #4:<input id="rx4" name="rx4" type="number" placeholder="xxxxxx" /><br />
                    #5:<input id="rx5" name="rx5" type="number" placeholder="xxxxxx" /><br />
                    #6:<input id="rx6" name="rx6" type="number" placeholder="xxxxxx" /><br />
                    #7:<input id="rx7" name="rx7" type="number" placeholder="xxxxxx" /><br />
                    #8:<input id="rx8" name="rx8" type="number" placeholder="xxxxxx" /><br />
                    #9:<input id="rx9" name="rx9" type="number" placeholder="xxxxxx" /><br />
                    #10:<input id="rx10" name="rx10" type="number" placeholder="xxxxxx" /><br />
                    <br />
                    <div>
                        Choose One:<br />
                        <input type="radio" name="delivery" value="pickup" /> Pickup In Person  <br />
                        <input type="radio" name="delivery" value="mail" /> Mail/Deliver Prescriptions
                    </div><br />
                    Comments:<br />
                    <textarea name="comment" rows="6" cols="60"></textarea><br />
                    {/*<button>Submit</button>*/}
                    <input type="submit" value="Submit" />
                    <br />
                </form>
                <Ack datasent={this.state.datasent} />
                {/*<FilterableProductTable products={PRODUCTS} />*/}
			</div>
		);
	}
}
class Ack extends Component {
    render() {
        const datasent = this.props.datasent;
        return (
            datasent && <p>Submitted on {new Date().toLocaleString()}.</p>
            );
    }
}

//https://reactjs.org/docs/thinking-in-react.html
class ProductCategoryRow extends Component {
    render() {
      const category = this.props.category;
      return (
        <tr>
          <th colSpan="2">
            {category}
          </th>
        </tr>
      );
    }
}
class ProductRow extends Component {
    render() {
      const product = this.props.product;
      const name = product.stocked ?
        product.name :
        <span style={{color: 'red'}}>
          {product.name}
        </span>;
  
      return (
        <tr>
          <td>{name}</td>
          <td>{product.price}</td>
        </tr>
      );
    }
}
class ProductTable extends Component {
    render() {
      const filterText = this.props.filterText;
      const inStockOnly = this.props.inStockOnly;
  
      const rows = [];
      let lastCategory = null;
  
      this.props.products.forEach((product) => {
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        if (inStockOnly && !product.stocked) {
          return;
        }
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category} />
          );
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.name}
          />
        );
        lastCategory = product.category;
      });
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
}
class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }
    handleInStockChange(e) {
      this.props.onInStockChange(e.target.checked);
    }
    render() {
      return (
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
          />
          <p>
            <input
              type="checkbox"
              checked={this.props.inStockOnly}
              onChange={this.handleInStockChange}
            />
            {' '}
            Only show products in stock
          </p>
        </form>
      );
    }
}
class FilterableProductTable extends Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        inStockOnly: false
      };
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }
    handleInStockChange(inStockOnly) {
      this.setState({
        inStockOnly: inStockOnly
      })
    }
    render() {
      return (
        <div>
          <SearchBar
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange}
          />
          <ProductTable
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
        </div>
      );
    }
}
const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];