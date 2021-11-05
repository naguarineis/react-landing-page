import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container-fluid">
				<span
					className="navbar-brand mb-0 h1 mx-5"
					style={{ color: "white" }}>
					Start Bootstrap
				</span>

				<ul
					className="nav justify-content-end mx-5"
					style={{ color: "white" }}>
					<li className="nav-item">
						<a
							className="nav-link link-light"
							aria-current="page"
							href="#">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link link-light" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link link-light" href="#">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link link-light" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
