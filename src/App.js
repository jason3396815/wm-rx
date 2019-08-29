import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Header from './components/header';
import Footer from './components/footer';
import Home from './routes/home';
import Refill from './routes/refill';
import Products from './routes/products';
import Cart from './routes/cart';
import Travel from './routes/travel';
/*import Delivery from './routes/delivery';
import About from './routes/about';*/

/*import Doctors from '../routes/doctors';
import Healing from '../routes/healing';
import Hours from '../routes/hours';*/

export default class App extends Component {
	render() {
		return (
			<div id="app">
				<Header />
				<Router>
					<Home path="/" />
					<Refill path="/refill" />
					<Products path="/products" />
					<Cart path="/cart" cart={[{name:'test',price:0}]} />
					<Travel path="/travel" />
					{/*<Delivery path="/delivery" />
    <About path="/about" />*/}

					{/*<Doctors path="/doctors" />*/}
					{/*<Healing path="/healing" />
					<Hours path="/hours" />*/}
				</Router>
				<Footer />
			</div>
		);
	}
}
