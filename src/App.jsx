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
import ScrollToTop from "./components/ScrollToTop.jsx";

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
			<BrowserRouter>
				{/* <ScrollToTop />
				<RouterProvider router={router} /> */}
                <ScrollToTop />
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<HomePage />} />
						<Route path="/about-us" element={<AboutUsPage />} />
						<Route path="/tours" element={<ToursPage />} />
						<Route path="/blog" element={<BlogPage />} />
						<Route path="/contact-us" element={<ContactUsPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
