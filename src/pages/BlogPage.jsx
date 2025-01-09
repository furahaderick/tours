import { useEffect } from "react";

import Hero from "../components/Hero.jsx";
import OverlayCards from "../components/OverlayCards.jsx";
import Cards from "../components/Cards.jsx";

import { blogPageSection, blogPageCards } from "../components/_data.js";

const BlogPage = () => {
	return (
		<>
			<Hero
				heading="Exploring East Africa"
				subheading="Insights and stories from your next adventure"
				backgroundImage="https://images.pexels.com/photos/259358/pexels-photo-259358.jpeg?auto=compress&cs=tinysrgb&w=2000"
			/>
			<OverlayCards
				cards={blogPageCards}
				heading="Rwanda Uncovered"
				subheading="Your guide to the best of Rwanda's landscapes and culture"
			/>
			<Cards
				heading="Your Trusted Travel Partner"
				subheading="Experience the difference with Elena & Emilia Tours."
				cards={blogPageSection}
				bgColor="body-secondary"
			/>
		</>
	);
};

export default BlogPage;
