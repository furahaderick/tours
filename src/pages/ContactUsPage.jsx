import { useEffect } from "react";

import Hero from "../components/Hero.jsx";
import Cards from "../components/Cards.jsx";

import { contactUsPageCards } from "../components/_data.js";

const ContactUsPage = () => {
	return (
		<>
			<Hero
				heading="Get in Touch with Elena & Emilia Tours"
				subheading="We're here to assist you on every step of your journey"
				backgroundImage="https://images.pexels.com/photos/9308435/pexels-photo-9308435.jpeg?auto=compress&cs=tinysrgb&w=2000"
			/>
			<Cards
				heading="Plan Your Visit"
				subheading="Explore our office location and hours"
				cards={contactUsPageCards}
				bgColor="body-tertiary"
			/>
		</>
	);
};

export default ContactUsPage;
