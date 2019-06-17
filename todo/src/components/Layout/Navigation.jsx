import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
	return (
		<Menu inverted attached='top'>
			<Container>
				<NavLink to='/'>
					<Menu.Item header>Your Personal Todo List</Menu.Item>
				</NavLink>
				<Menu.Menu position='right'>
					<NavLink to='/login'>
						<Menu.Item>Log In</Menu.Item>
					</NavLink>
					<NavLink to='/register'>
						<Menu.Item>Register</Menu.Item>
					</NavLink>
				</Menu.Menu>
			</Container>
		</Menu>
	);
};

export default Navigation;
