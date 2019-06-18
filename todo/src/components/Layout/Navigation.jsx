import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { doLogout } from '../../actions/auth';

class Navigation extends Component {
	render() {
		const { isAuth, doLogout } = this.props;
		return (
			<Menu inverted attached='top'>
				<Container>
					<NavLink to='/'>
						<Menu.Item header>Your Personal Todo List</Menu.Item>
					</NavLink>
					{isAuth ? (
						<Menu.Menu position='right'>
							<Menu.Item onClick={doLogout}>Log Out</Menu.Item>
						</Menu.Menu>
					) : (
						<Menu.Menu position='right'>
							<NavLink to='/login'>
								<Menu.Item>Log In</Menu.Item>
							</NavLink>
							<NavLink to='/register'>
								<Menu.Item>Register</Menu.Item>
							</NavLink>
						</Menu.Menu>
					)}
				</Container>
			</Menu>
		);
	}
}
const mapStateToProps = state => ({ isAuth: state.auth.isAuthenticated });

export default connect(mapStateToProps, { doLogout })(Navigation);
