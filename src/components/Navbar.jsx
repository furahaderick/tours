import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="container navbar sticky-top navbar-expand-lg bg-body-tertiary py-2 px-1">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					Omery Tours
				</Link>
				<button
					className={`navbar-toggler collapsed`}
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className={`collapse navbar-collapse`} id="navbarNavAltMarkup">
					<div className="navbar-nav ms-auto text-lg-end text-center">
						<NavLink className="nav-link" aria-current="page" to="/">
							Home
						</NavLink>
						<NavLink className="nav-link" to="/about-us">
							About Us
						</NavLink>
						<NavLink className="nav-link" to="/tours">
							Tours
						</NavLink>
						<NavLink className="nav-link" to="/blog">
							Blog
						</NavLink>
						<NavLink className="nav-link" to="/contact-us">
							Contact Us
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
