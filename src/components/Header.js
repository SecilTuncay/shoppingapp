import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function Header() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar--katalog">
			<Container>
				<Navbar.Brand href={"/"}>
					<strong>Katalog App</strong>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link className="mr-2" href={"/"}>
							Ana Sayfa
						</Nav.Link>
						<Nav.Link href={"/"}>Ürünler</Nav.Link>
					</Nav>
					<Nav className="ml-auto">
						<Nav.Link eventKey={2} href={`/favorites`}>
							<p>
								<FontAwesomeIcon icon="fa-solid fa-heart" />
								<span className="ml-2">Favoriler</span>
							</p>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
{
	/* <Navbar bg="light" expand="lg" className=" navbar-expand-lg navbar-dark default-color navbar--katalog">
			<Container>
				<Navbar.Brand>
					<Link to={"/"}>
						<strong>Katalog App</strong>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link className="p-2" to={"/"}>
							Ana Sayfa
						</Link>
						<Link className="p-2" to={"/"}>
							Ürünler
						</Link>
					</Nav>
					<Nav>
						<Link to=>
							<p>
								<FontAwesomeIcon icon="fa-solid fa-heart" />
								<span className="ml-2">Favoriler</span>
							</p>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar> */
}
