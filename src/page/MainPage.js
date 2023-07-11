import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class MainPage extends Component {
	render() {
		return (
			<div className="mainpage-wrapper">
				<h1>Welcome to Dogs Breed</h1>
				<div>
					Press{' '}
					<Link to="/search">
						<Button variant="primary" className="btn-pill">
							Here
						</Button>{' '}
					</Link>
					and start to search
				</div>
			</div>
		);
	}
}

export default MainPage;
