
import Hero from "../components/Hero.jsx";
import ZPattern from "../components/ZPattern.jsx";
import Cards from "../components/Cards.jsx";

import { homePageCards, homePageSections } from "../components/_data.js";

const HomePage = () => {
    
	return (
		<>
			<Hero
				heading="Explore East Africa"
				backgroundImage="https://images.pexels.com/photos/7235413/pexels-photo-7235413.jpeg?auto=compress&cs=tinysrgb&w=2000"
				isHome={true}
			/>
			<ZPattern
				heading="Our Tours"
				subheading="Select from a variety of curated tours designed to showcase the
					best of Rwanda."
				sections={homePageSections}
                hasLinks={true}
                linkTitle="View Experiences"
			/>
			<Cards
				heading="Your Trusted Travel Partner"
				subheading="Experience the difference with Omery Tours."
				cards={homePageCards}
			/>
		</>
	);
};

export default HomePage;
