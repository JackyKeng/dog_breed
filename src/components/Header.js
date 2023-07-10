import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<Navbar bg="primary" expand="md" className="nav-header"  data-bs-theme="dark">
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
					<NavLink to="/" className="nav-link" activeClassName="active">
						Home
					</NavLink>
					<NavLink to="/search" className="nav-link" activeClassName="active">
						Search
					</NavLink>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		// <Navbar bg="primary" expand="md" data-bs-theme="dark">
		// 	<Container fluid>
		// 		<Navbar.Brand href="/">
		// 			<Image src="../images/logo.jpeg" width={150} />
		// 		</Navbar.Brand>
		// 		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		// 		<Navbar.Collapse id="basic-navbar-nav">
		// 			<Nav className="me-auto">
		// 				<NavLink to="/" className="nav-link" activeClassName="active">
		// 					Home
		// 				</NavLink>
		// 				<NavLink to="/search" className="nav-link" activeClassName="active">
		// 					Search
		// 				</NavLink>
		// 			</Nav>
		// 		</Navbar.Collapse>
		// 	</Container>
		// </Navbar>
	);
};

export default Header;
