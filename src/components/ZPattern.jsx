import React from "react";
import { Link } from "react-router-dom";

import "./ZPattern.css";

const ZPattern = ({
	heading,
	subheading,
	sections,
	bgColor = "white",
	hasLinks = false,
	linkTitle = "",
	isHome = false,
}) => {
	sections = isHome ? sections.slice(0, 3) : sections;

	return (
		<section className={`py-5 bg-${bgColor}`}>
			<div className="text-center mb-5">
				<h2>{heading}</h2>
				<p>{subheading}</p>
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
								// alt={`Section ${index + 1}`}
								alt="Elena Safaris"
								className="img-fluid rounded"
							/>
						</div>
						{/* text */}
						<div className="col-md-6">
							<h4>{section.title}</h4>
							<p>{section.text}</p>
							{/* {hasLinks ? (
								<a
									href={section.link}
									className="btn btn-secondary mt-3"
									role="button"
								>
									{linkTitle}
								</a>
							) : null} */}
							{hasLinks && linkTitle && (
								<a
									href={section.link}
									className="btn btn-secondary mt-3"
									role="button"
								>
									{linkTitle}
								</a>
							)}
						</div>
						{/* Link */}
					</div>
				))}
				{isHome && (
					<div className="text-center mt-5 pt-5">
						<Link
							to="/tours"
							className="mt-3 btn btn-outline-secondary"
							role="button"
						>
							VIEW ALL TOURS
						</Link>
					</div>
				)}
			</div>
		</section>
	);
};

export default ZPattern;
