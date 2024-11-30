import React from "react";
import "./OverlayCards.css"; // Import custom CSS for further styling

const OverlayCards = ({ heading, subheading, cards }) => {
	return (
		<section className="py-5">
			<div className="text-center mb-5">
				<h2>{heading}</h2>
				<p>{subheading}</p>
			</div>
			<div className="container">
				<div className="row">
					{cards.map((card, index) => (
						<div className="col-md-4 mb-4" key={index}>
							<div
								className="overlay-card"
								style={{ backgroundImage: `url(${card.image})` }}
							>
								<div className="overlay-content">
									<h3 className="overlay-title">{card.title}</h3>
									<p className="overlay-description">
										{card.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OverlayCards;
