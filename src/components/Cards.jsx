import React from "react";
import { FaSquareArrowUpRight } from "react-icons/fa6";

// import { cards } from "./_data.js";
import "./Cards.css";

const Cards = ({
	heading,
	subheading,
	cards,
	bgColor = "white",
	hasLinks = false,
	linkTitle = "",
}) => {
	return (
		<section className={`py-5 mb-5 bg-${bgColor}`}>
			<div className="text-center mb-5">
				<h2>{heading}</h2>
				<p>{subheading}</p>
			</div>
			<div className="container">
				<div className="row">
					{cards.map((card, index) => (
						<div className="col-md-4" key={index}>
							<div className="card shadow-sm mb-4">
								{/* card image */}
								<img
									src={card.image}
									alt={`Card ${index + 1}`}
									className="card-img-top rounded-0"
								/>
								{/* card body */}
								<div className="card-body">
									<h5 className="card-title">{card.title}</h5>
									<p className="card-text">{card.text}</p>
									{/* <button className="btn btn-outline-secondary btn-lg mt-3 fs-6">Read More</button> */}
									<p>
										{hasLinks && linkTitle && (
											<a
												className="link-offset-2 text-secondary"
												href={card.link}
											>
												{linkTitle}
												<FaSquareArrowUpRight className="m-1" />
											</a>
										)}
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

export default Cards;
