import React from "react";

import "./ZPattern.css";

const ZPattern = ({
	heading,
	subheading,
	sections,
	bgColor = "white",
	hasLinks = false,
	linkTitle = "",
}) => {
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
								alt={`Section ${index + 1}`}
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
			</div>
		</section>
	);
};

export default ZPattern;
