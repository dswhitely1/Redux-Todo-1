import React, { Component } from 'react';
import { Button, Form, Container, Header, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { doLogin } from '../../actions/auth';
import isEmpty from '../../validation/isEmpty';

class Login extends Component {
	state = {
		username : '',
		password : '',
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = async e => {
		e.preventDefault();
		await this.props.doLogin(this.state);
		if (!isEmpty(this.props.loginErrors)) {
			console.log(`I have errors`);
		} else {
			this.props.history.push('/');
		}
	};

	render() {
		const { isLoading, loginErrors } = this.props;
		const { username, password } = this.state;
		return (
			<Container>
				<Header textAlign='center' as='h2' content='Login' />
				<Form onSubmit={this.handleSubmit} error loading={isLoading}>
					<Form.Input
						label='Enter Username'
						type='text'
						value={username}
						name='username'
						onChange={this.handleChange}
					/>
					{loginErrors && loginErrors.username && <Message error header='Username' content={loginErrors.username} />}
					<Form.Input
						label='Enter Password'
						type='password'
						value={password}
						name='password'
						onChange={this.handleChange}
					/>
					{loginErrors && loginErrors.password && <Message error header='Password' content={loginErrors.password} />}
					<Button primary type='submit' content='Log In' />
				</Form>
			</Container>
		);
	}
}

const mapStateToProps = state => ({ loginErrors: state.auth.errors, isLoading: state.auth.isLoading });

export default connect(mapStateToProps, { doLogin })(Login);
