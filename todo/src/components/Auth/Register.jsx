import React, { Component } from 'react';
import { Form, Button, Container, Header, Modal, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { doRegister, doAcknowledge } from '../../actions/auth';

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

	handleClose = () => {
		this.props.doAcknowledge();
		this.props.history.push('/login');
	};

	handleSumbit = e => {
		e.preventDefault();
		this.props.doRegister(this.state);
	};
	render() {
		const { isLoading, success, registerErrors } = this.props;
		const { name, username, password, password2 } = this.state;
		return (
			<Container>
				<Modal open={success} closeOnEscape={false} closeOnDimmerClick={false} onClose={this.handleClose}>
					<Modal.Header>Account Created</Modal.Header>
					<Modal.Content>
						<p>Your account has been created successfully</p>
					</Modal.Content>
					<Modal.Actions>
						<Button onClick={this.handleClose} content='OK' positive />
					</Modal.Actions>
				</Modal>
				<Header textAlign='center' as='h2' content='Register' />
				<Form error loading={isLoading} onSubmit={this.handleSumbit}>
					<Form.Input label='Name' type='text' value={name} name='name' onChange={this.handleChange} />
					{registerErrors && registerErrors.name && <Message error header='Name' content={registerErrors.name} />}
					<Form.Input label='Username' type='text' value={username} name='username' onChange={this.handleChange} />
					{registerErrors &&
					registerErrors.username && <Message header='Username' error content={registerErrors.username} />}
					<Form.Input label='Password' type='password' value={password} name='password' onChange={this.handleChange} />
					{registerErrors &&
					registerErrors.password && <Message header='Password' error content={registerErrors.password} />}
					<Form.Input
						label='Confirm Password'
						type='password'
						value={password2}
						name='password2'
						onChange={this.handleChange}
					/>
					{registerErrors &&
					registerErrors.password2 && <Message header='Confirm Password' error content={registerErrors.password2} />}
					<Button primary content='Submit' />
				</Form>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	isLoading      : state.auth.isLoading,
	registerErrors : state.auth.errors,
	success        : state.auth.isRegisterSuccess,
});

export default connect(mapStateToProps, { doRegister, doAcknowledge })(Register);
