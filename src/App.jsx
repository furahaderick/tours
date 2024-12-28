import {
	Route,
	BrowserRouter,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Routes,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import ToursPage from "./pages/ToursPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";
import ExperiencesPage from "./pages/ExperiencesPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<HomePage />} />
						<Route path="/about-us" element={<AboutUsPage />} />
						<Route path="/tours" element={<ToursPage />} />
						<Route path="/blog" element={<BlogPage />} />
						<Route path="/contact-us" element={<ContactUsPage />} />
						<Route
							path="/tours/:tourId/experiences"
							element={<ExperiencesPage />}
						/>
						<Route path="*" element={<NotFoundPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

/**
 * homepage - add experiences below tours section, add link to experiences in tours section
 * create experiences page (cards)
 */

export default App;
