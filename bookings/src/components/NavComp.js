import React from "react";
import {Navbar, Container} from "react-bootstrap";
import "./Components.css";

export default function NavComp() {
	return (
		<Navbar className="py-3" style={{backgroundColor: "aqua"}}>
			<Container>
				<Navbar.Brand href="#home">Bookings</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
			</Container>
		</Navbar>
	);
}
