import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class Hours extends Component {
	render() {
		return (
			<div class={style.hours}>
				<h1>Hours and Location</h1>
				<h2>Hours</h2>
				<p>Monday through Friday 9:00 AM to 6:00 PM</p>
                <p>Saturday 9:00 AM to 4:00 PM</p>
                <p>Sunday  11:00 AM to 3:00 PM<br />
                (Sunday no pharmacist on duty - NO prescription pick-up)</p>
                <h2>Location</h2>
                <p>Downtown Point Reyes Station at the corner of 4th and A streets</p>
                <p><a href="https://goo.gl/maps/bbzbC2PqYeB2">Google Map Link</a></p>
			</div>
		);
	}
}
