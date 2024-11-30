import { useEffect } from "react";

import Hero from "../components/Hero.jsx";
import ZPattern from "../components/ZPattern.jsx";
import Cards from "../components/Cards.jsx";

import { toursPageSection, homePageSections } from "../components/_data.js";

const ToursPage = () => {

	return (
		<>
			<Hero
				heading="Explore East Africa"
				subheading="Experience the wonders of Rwanda with our expertly curated tours."
				backgroundImage="https://images.pexels.com/photos/4404518/pexels-photo-4404518.jpeg?auto=compress&cs=tinysrgb&w=2000"
			/>
			<Cards
				heading="Our Featured Tours"
				subheading="Discover the unique adventures we offer."
				cards={homePageSections}
			/>
			<ZPattern
				heading="What Our Clients Say"
				subheading="Hear from our happy travelers about their unforgettable journeys."
				sections={toursPageSection}
				bgColor="body-secondary"
			/>
		</>
	);
};

export default ToursPage;
