import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Footer extends Component {
	render() {
		return (
			<div style='text-align:center'>
				<p>Store Hours: M-F 9am-6pm, Sat 9am-4pm, Sun 10am-4pm (Sunday no pharmacist on duty, no prescription pickup)<br />
				Store Location: Downtown Point Reyes Station at the corner of 4th and A streets)<br />
				<a href="https://goo.gl/maps/bbzbC2PqYeB2">Google Map Link</a><br />	
				Mailing address: P.O. Box 1510<br />			
				Store address: 11 4th Street<br />
				Point Reyes Station, California 94956<br />
				Tel: (415) 663-1121     Fax: (415) 663-1219</p>
			</div>
		);
	}
}
