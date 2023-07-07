import React from 'react';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
	return (
		<Navbar bg="primary" data-bs-theme="dark">
			<Container>
				<Navbar.Brand href="/">
					<Image src="/public/images/logo.jpeg" />
				</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
