//AppNavbar.js


import { useState, useContext } from 'react';
//React bootstrap components
import { Navbar, Nav } from 'react-bootstrap';
//react-router
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';
import React, { Component } from 'react';


export default function AppNavbar() {


	const { user } = useContext(UserContext);
	//Store the user information (email) in the state
	//getItem gets the key in the localStorage
	// const [ user, setUser ] = useState(localStorage.getItem('email'))
	// console.log(user)

	return(
		<Navbar bg="dark" expand="lg" variant="dark" className="mb-5">
			<Navbar.Brand className="ms-4" as={Link} to="/" ><h1>{`𝕊𝕠𝕞𝕖𝕣𝕤𝕒𝕦𝕝𝕥`} Academy </h1> </Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ms-auto">
					<Nav.Link as={Link} to="/"><h4>{`🄷🄾🄼🄴`}</h4></Nav.Link>
					<Nav.Link as={Link} to="/courses"><h3>{`🄲🄾🅄🅁🅂🄴🅂`}</h3></Nav.Link>
					<Nav.Link as={Link} to="/courses">  </Nav.Link>

					{(user.accessToken !== null) ?
						<Nav.Link as={Link} to="/logout"><h4>{`🄻🄾🄶🄾🅄🅃`}</h4></Nav.Link>

						:
						<>
							<Nav.Link as={Link} to="/login"><h4>{`🄻🄾🄶🄸🄽`}</h4></Nav.Link>
							<Nav.Link as={Link} to="/register"><h3>{`🅁🄴🄶🄸🅂🅃🄴🅁`}</h3></Nav.Link>
						</>


					}
				</Nav>
			</Navbar.Collapse>
			
		</Navbar>

		)
}

