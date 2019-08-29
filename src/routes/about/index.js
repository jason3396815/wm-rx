import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class About extends Component {
	render() {
		return (
			<div class={style.about}>
				<h1>About Us</h1>
				<h2>Dedicated to Healing</h2>
				<h2>Open Letter</h2>
				<p>Dear Friends and Neighbors,</p>
<p>Thank you so much for welcoming us with open arms and warm hearts. We feel deeply grateful and appreciated. Now that the long process of acquiring the pharmacy is finally done, we are very excited at the prospect of bringing the best products and services for healing and health that we can find. We live in a fortunate time when many new and more effective medicines and therapies are becoming available, from alternative as well as traditional sources. We are committed to bringing some of the best among them to you. And we would like to ask for your help.</p>
<p>Please send us suggestions on which products or services you would like us to carry, or how we may do things differently to serve you better. Suggestions can be e-mailed to us at zsu@wm-rx.com, or put in the suggestions box at the pharmacy. And we are always available to hear from you in person.</p>
<p>Thank you, and we look forward to a most rewarding time being part of the West Marin community.</p>
Zsuzsanna Biran and Jason Yoon<br />
Owners, West Marin Pharmacy<br />
				<p>Zsuzsanna Biran, Owner, Pharmacist  zsu@wm-rx.com</p>
				<p>Jason Yoon, Owner, Energy Healer  jason@wm-rx.com</p>
			</div>
		);
	}
}
