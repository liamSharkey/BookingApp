import React from "react";
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import "./Components.css";

export default function NavComp() {
	return (
		<Navbar bg="primary">
			<Container>
				<Navbar.Brand href="#home">Bookings</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="nav-text ms-auto ">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
