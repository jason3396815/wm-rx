import { connect } from 'preact-redux';
import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
//import style from 'style.css';
//import Sign from './WMP-sign.PNG';

class Header extends Component {
	render() {
    const cart = this.props.cart
    const cartLength = cart.length
		return (
			<div>
				<img alt="WMP Store Signage" width="930" height="198" src='image/WMP-sign.PNG'></img>
			<header class='header'>
				<h1>West Marin Pharmacy</h1>
				<nav>
					<Link activeClassName='active' href="/">Home</Link>
					<Link activeClassName='active' href="/refill">Refill Rx</Link>
					<Link activeClassName='active' href="/products">Products</Link>
					<Link activeClassName='active' href="/travel">Travel Prep</Link>
					<Link activeClassName='active' href="/delivery">Delivery</Link>
					<Link activeClassName='active' href="/about">About Us</Link>
          <Link activeClassName="active" href="/cart">{ (cartLength==0) ? 'Cart': 'Checkout'}
						<svg
							class="button__image"
							width="24"
							height="24"
							viewBox="0 -2 24 24">
							<path style={ (cartLength) ? 
								"fill:#FFD700;":"fill:#FFFFFF;" }
								d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,
								2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,
								11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,
								17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,
								14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,
								12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,
								1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,
								2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
						</svg>
						{cartLength}
					</Link>
					{/*<Link activeClassName={style.active} href="/doctors">For Doctors and Clinics</Link>
					<Link activeClassName={style.active} href="/healing">Healing Classes</Link>
					<Link activeClassName={style.active} href="/hours">Hours and Location</Link>*/}
				</nav>
			</header>
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(Header);
