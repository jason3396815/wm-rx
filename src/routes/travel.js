import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Travel extends Component {
	render(props,state) {
		return (
			<div>
                <form>
                    <h1>Travel Preparation</h1>
                    <h2>May we assist you with your travel needs.</h2>
                    <input type="checkbox" />Travel Size Shampoo & Conditioner<br />
                    <input type="checkbox" />Toothbrush<br />
                    <input type="checkbox" />Travel Size Toothpaste<br />
                    <input type="checkbox" />Travel Size Q-Tips<br />
                    <input type="checkbox" />Travel Size Contact Lens Solutions<br />
                    <input type="checkbox" />Contact Lens Case<br />
                    <input type="checkbox" />Tissues<br />
                    <input type="checkbox" />Hand Sanitizer<br />
                    <input type="checkbox" />Sunblock<br />
                    <input type="checkbox" />Body & Hand Lotion<br />
                    <input type="checkbox" />Deodorant<br />
                    <input type="checkbox" />Razors & Shaving Cream<br />
                    <input type="checkbox" />Chapstick<br />
                    <input type="checkbox" />Tide to Go<br />
                    <input type="checkbox" />Advil/Tylenol/Asprin<br />
                    <input type="checkbox" />Any Other Medications<br />
                    <input type="checkbox" />Band-Aids<br />
                    <input type="checkbox" />Neosporin<br />
                    <input type="checkbox" />Probiotics<br />
                    <input type="checkbox" />Emergen-C Packets<br />
                    <input type="checkbox" />Snacks<br />
                    <input type="checkbox" />Travel Journal & Pen/Pencil<br />
                    <input type="checkbox" />Cellphone<br />
                    <input type="checkbox" />Cellphone Charger<br />
                    <input type="checkbox" />Flashlight<br />
                    <input type="checkbox" />Reading Glasses & Sunglasses<br />
                    <input type="checkbox" />Hair Brush<br />
                    <input type="checkbox" />Ear Plugs<br />
                    <input type="checkbox" />Make-Up<br />
                    <input type="checkbox" />Make-Up Remover<br />
                    <input type="checkbox" />Water Bottle<br />
                    <input type="checkbox" />AC Plug Adaptor<br />
                </form>
			</div>
		);
	}
}
