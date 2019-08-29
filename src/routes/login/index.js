import { h, Component } from 'preact';
import style from './style';
import FormContainer from '../../containers/FormContainer';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log("data",data)
    }
    handleInputChange = (event) => {
        event.preventDefault()
        console.log(event)
        console.log(event.target.name)
        console.log(event.target.value)
    }
	render() {
		const {firstname} = this.state
		return (
			<div class={style.home}>
                <div className="container">
                    <h3>React Form</h3>
                    <FormContainer />
                </div>
                    {/*<h2>Login:</h2>
                    <form onSubmit={this.handleSubmit}>
                        Email: <input type='text' name='email' /><br />
                        <p><input type='text' placeholder='Password' name='password' /></p>
                        <p><button>Login</button></p>
                        <h2>Don't have an account? Signup:</h2>
                        <p><input type='text' placeholder='First Name' name='firstname' /></p>
                        <p><input type='text' placeholder='Last Name' name='lastname' /></p>
        <p><input type='text' placeholder='Password' name='password' /></p>
                        <p><button>Signup</button></p>
                    </form>*/}
			</div>
		);
	}
}