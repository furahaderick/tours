import backgroundImage from "../assets/images/elephs2.jpg";

const Hero = () => {
	const heroStyle = {
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		position: "relative",
		height: "55vh",
		color: "#fff",
	};

	const overlayStyle = {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(0, 0, 0, 0.5)", // dark overlay
		zIndex: 1,
	};

	const contentStyle = {
		position: "relative",
		zIndex: 2,
	};

	const buttonStyle = {
		width: "100%",
		maxWidth: "300px",
	};

	return (
		<div
			style={heroStyle}
			className="d-flex align-items-center justify-content-center"
		>
			<div style={overlayStyle}></div>
			<div style={contentStyle} className="text-center px-3">
				<h1 className="display-4 fw-bold">Explore East Africa</h1>
				<p className="lead">
					Embark on an unforgettable journey through Rwanda's breathtaking
					landscapes and rich cultures with{" "}
					<mark>
						<b>
							<em>Omery</em>
						</b>
					</mark>
					, your trusted guide to East Africa.
				</p>
				<button
					style={buttonStyle}
					className="btn btn-outline-light btn-lg mt-3"
				>
					Book Now
				</button>
			</div>
		</div>
	);
};

export default Hero;