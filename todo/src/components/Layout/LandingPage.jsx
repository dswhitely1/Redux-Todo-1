import React from 'react';
import styled from 'styled-components';
import { Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import bgImage from '../../imgs/cathryn-lavery-67852-unsplash.jpg';

const HomePage = styled.div`
	margin: auto;
	position: relative;
	display: table;
	width: 100%;
	background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0, rgba(255, 255, 255, 0.1) 100%), url(${bgImage});
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;

	div {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		div {
			flex-direction: row;
			height: auto;
		}
	}
`;

function LandingPage() {
	return (
		<HomePage>
			<div>
				<Header as='h1'>Your Personal Note Taking App</Header>
				<div>
					<Link to='/login'>
						<Button primary>Login</Button>
					</Link>
					<Link to='/register'>
						<Button secondary>Register</Button>
					</Link>
				</div>
			</div>
		</HomePage>
	);
}

export default LandingPage;
