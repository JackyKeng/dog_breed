import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<Navbar bg="primary" expand="md" className="nav-header" data-bs-theme="dark">
			<Navbar.Brand as={Link} to="/">
				<img
					src="../images/logo.jpeg"
					height="50"
					className="d-inline-block align-top"
					alt="Logo"
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<NavLink to="/search" className="nav-link" activeClassName="active">
						Search
					</NavLink>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
