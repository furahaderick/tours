import React from "react";

import { sections } from "./_data.js";
import "./Tours.css";

const Tours = () => {
	return (
		<section className="py-5">
			<div className="text-center mb-5">
				<h2>Our Tours</h2>
				<p>
					Select from a variety of curated tours designed to showcase the
					best of Rwanda.
				</p>
			</div>
			<div className="container">
				{sections.map((section, index) => (
					<div
						className={`row align-items-center mb-5 ${
							index % 2 === 0 ? "" : "flex-row-reverse"
						}`}
						key={index}
					>
						{/* image */}
						<div className="col-md-6">
							<img
								// style={{ width: "500px", height: "350px" }}
								src={section.image}
								alt={`Section ${index + 1}`}
								className="img-fluid rounded"
							/>
						</div>
						{/* text */}
						<div className="col-md-6">
							<h4>{section.title}</h4>
							<p>{section.text}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Tours;
