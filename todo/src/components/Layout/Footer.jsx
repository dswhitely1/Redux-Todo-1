import React from 'react';
import { Segment, Container, Header, Menu } from 'semantic-ui-react';

const Footer = () => {
	return (
		<Segment inverted attached='bottom'>
			<Container textAlign='center'>
				<Header as='h5' inverted color='grey'>
					Copyright 2019, Digital Soultions by Don
				</Header>
			</Container>
		</Segment>
	);
};

export default Footer;
