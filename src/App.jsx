import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import ToursPage from "./pages/ToursPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path="/about-us" element={<AboutUsPage />} />
				<Route path="/tours" element={<ToursPage />} />
				<Route path="/blog" element={<BlogPage />} />
				<Route path="/contact-us" element={<ContactUsPage />} />
			</Route>
		)
	);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
