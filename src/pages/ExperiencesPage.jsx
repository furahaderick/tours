import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { experiencesData } from "../components/_data.js";

const ExperiencesPage = ({ bgColor = "white" }) => {
	const { tourId } = useParams(); // Get tourId from the URL params
	const [experiences, setExperiences] = useState([]);

	useEffect(() => {
		if (experiencesData[tourId]) {
			setExperiences(experiencesData[tourId]);
		}
	}, [tourId]);

	return (
		<section className={`container py-5 mb-5 bg-${bgColor}`}>
			<div className="text-center mb-5">
				<h2>
					Experiences in {tourId.charAt(0).toUpperCase() + tourId.slice(1)}{" "}
					Tour
				</h2>
			</div>
			<div className="row">
				{experiences.length === 0 ? (
					<p className="text-center">
						No experiences found for this tour.
					</p>
				) : (
					experiences.map((exp, index) => (
						<div className="col-md-4 mb-4" key={index}>
							<div className="card shadow-sm">
								<img
									src={exp.image}
									className="card-img-top"
									alt={exp.title}
									style={{ height: "300px", objectFit: "cover" }}
								/>
								<div className="card-body">
									<h5 className="card-title">{exp.title}</h5>
									<p className="card-text text-muted">
										<strong>Location:</strong> {exp.location}
										<br />
										<strong>Estimated Time:</strong> {exp.time}
									</p>
									<p className="card-text">{exp.description}</p>
								</div>
							</div>
						</div>
					))
				)}
			</div>
		</section>
	);
};

export default ExperiencesPage;
