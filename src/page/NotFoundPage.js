import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component {
	render() {
		return (
			<Container className="mainpage-wrapper">
				<div className="text-center pb-10">
					<h1 className="display-1 fw-bold">404</h1>
					<p className="h1">Page not found</p>
					<p className="h2 fw-normal mt-3 mb-4">
						The page you are looking for might have been removed.
					</p>
					<Button as={Link} variant="primary" to="/search" className="btn-lg">
						Return to website
					</Button>
				</div>
			</Container>
		);
	}
}

export default NotFoundPage;
