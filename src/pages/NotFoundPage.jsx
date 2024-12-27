const NotFoundPage = ({ bgColor = "white" }) => {
	return (
		<section className={`py-5 mb-5 bg-${bgColor}`}>
			<div className="text-center mb-5">
				<h2>404 Page Not Found!</h2>
				<p>The link you're trying to visit does not exist</p>
			</div>
		</section>
	);
};
export default NotFoundPage;
