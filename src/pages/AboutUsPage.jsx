import { useEffect } from "react";

import Hero from "../components/Hero.jsx";
import Cards from "../components/Cards.jsx";
import ZPattern from "../components/ZPattern.jsx";

import { aboutUsPageCards, aboutUsPageSection1, aboutUsPageSection2 } from "../components/_data.js";

const AboutUsPage = () => {
    
	return (
		<>
			<Hero
				heading="Welcome to Omery Tours"
				subheading="Your gateway to East Africa's wonders"
				backgroundImage="https://images.pexels.com/photos/15838666/pexels-photo-15838666/free-photo-of-safari-4x4-at-parking-lot.jpeg?auto=compress&cs=tinysrgb&w=2000"
			/>
			<Cards
				heading="Our Journey Begins"
				subheading="Passionate about exploring East Africa"
				cards={aboutUsPageCards}
			/>
			<ZPattern
				heading="Meet Our Experts"
				subheading="Guided by passion and experience"
				sections={aboutUsPageSection1}
				bgColor="body-secondary"
			/>
			<ZPattern
				heading="Our Adventures"
				subheading="Memorable journeys through East Africa"
				sections={aboutUsPageSection2}
			/>
		</>
	);
};

export default AboutUsPage;
