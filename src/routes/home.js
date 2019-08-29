import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Home extends Component {
	render() {
		return (
			<div>
				<h1>UNDER CONSTRUCTION</h1>
				<h2>Wholistic Pharmacy Offering the Best of West and East</h2>
				<p>West Marin Pharmacy offers the full-range of healing modalities. In addition to western medicines, we offer Chinese and western herbs, homeopathics, aromatherapy and more.</p>
				<h3>NEW! Same Day Delivery now available to Petaluma and Novato, CA.</h3>
				<p>Orders placed by 2pm will be delivered by our staff the same day to your address.{' '}
				<Link>Delivery charges</Link> may apply.<br />
				Same day delivery to P.O. Box in Bolinas, Stinson Beach, and Olema, CA continues to be available.</p>

			</div>
		);
	}
}
