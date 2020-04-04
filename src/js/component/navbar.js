import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<div className="m-auto">
				<Link to="/">
					<span className="navbar-brand h1">Home</span>
				</Link>
				<Link to="/">
					<span className="navbar-brand  h1">People</span>
				</Link>
				<Link to="/">
					<span className="navbar-brand  h1">Planets</span>
				</Link>
			</div>
		</nav>
	);
};
