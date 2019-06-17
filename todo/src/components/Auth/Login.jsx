import React, { Component } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react';

class Login extends Component {
	state = {
		username : '',
		password : '',
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<Container>
				<Header textAlign='center' as='h2' content='Login' />
				<Form>
					<Form.Input
						label='Enter Username'
						type='text'
						value={this.state.username}
						name='username'
						onChange={this.handleChange}
					/>
					<Form.Input
						label='Enter Password'
						type='password'
						value={this.state.password}
						name='password'
						onChange={this.handleChange}
					/>
					<Button primary type='submit' content='Submit' />
				</Form>
			</Container>
		);
	}
}

export default Login;
