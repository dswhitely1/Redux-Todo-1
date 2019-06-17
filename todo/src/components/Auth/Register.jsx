import React, { Component } from 'react';
import { Form, Button, Container, Header } from 'semantic-ui-react';

class Register extends Component {
	state = {
		name      : '',
		username  : '',
		password  : '',
		password2 : '',
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<Container>
				<Header textAlign='center' as='h2' content='Register' />
				<Form>
					<Form.Input label='Name' type='text' value={this.state.name} name='name' onChange={this.handleChange} />
					<Form.Input
						label='Username'
						type='text'
						value={this.state.username}
						name='username'
						onChange={this.handleChange}
					/>
					<Form.Input
						label='Password'
						type='password'
						value={this.state.password}
						name='password'
						onChange={this.handleChange}
					/>
					<Form.Input
						label='Confirm Password'
						type='password'
						value={this.state.password2}
						name='password2'
						onChange={this.handleChange}
					/>
					<Button primary content='Submit' />
				</Form>
			</Container>
		);
	}
}

export default Register;
