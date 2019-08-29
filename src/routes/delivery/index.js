import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Delivery extends Component {
	render() {
		return (
			<div class={style.delivery}>
				<h1>Delivery Info</h1>
				<h2>NEW! Same Day Delivery now available to San Rafael, San Anselmo, Petaluma, Novato, Fairfax and Lagunitas, CA.</h2>
				<p>Orders placed M-F by 2pm will be delivered by our staff the same day to your address.<br />
				<br />
				Delivery charges:<br />
				Standard charge: $9.50 to physical address, $7.50 to P.O.Box.<br />
				Delivery charge discount:<br />
				$20 or more order - discount $2<br />
				$40 or more order - discount $4<br />
				$60 or more order - free delivery<br />
				<br />
				Orders that include any prescriptions paid in full by the customer (no insurance) also gets free delivery. Co-pays for insurance paid prescriptions do not count towards discounted or free delivery.</p>

				<h3>Same day delivery M-F to P.O. Box in Bolinas and Stinson Beach, CA continues to be available.</h3>
				<p>Delivery Charges when not using the same day delivery service:
				Delivery by Post Office or UPS. Charge $7.50 up to 3 Oz(?)<br />
				Orders placed by 2pm Pacific Time go out the same day.</p>
			</div>
		);
	}
}
