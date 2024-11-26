import React from "react";
import { FaSquareArrowUpRight } from "react-icons/fa6";

import { cards } from "./_data.js";
import "./Cards.css";

const Cards = () => {
	return (
		<section className="py-5 mb-5">
			<div className="text-center mb-5">
				<h2>Your Trusted Travel Partner</h2>
				<p>Experience the difference with Omery Tours.</p>
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
									<h5 className="card-title">{card.heading}</h5>
									<p className="card-text">{card.text}</p>
									{/* <button className="btn btn-outline-secondary btn-lg mt-3 fs-6">Read More</button> */}
									<p>
										<a class="link-offset-2 text-secondary" href="#">
											Read More
											<FaSquareArrowUpRight className="m-1" />
										</a>
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
