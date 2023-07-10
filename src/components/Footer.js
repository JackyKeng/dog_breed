import moment from 'moment/moment';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="footer bg-primary">
			<Container fluid>
				<Row>
					<Col className="text-start">
						Copyright © {moment().get('years')} <Link to="/programs">Dog Breed</Link>. &nbsp; All
						rights reserved.
					</Col>
					<Col className="text-end">
						<b>Version</b> 1.0.0
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
