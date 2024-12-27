import { FaPhoneVolume, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="py-2 mt-4">
			<div className="container text-center">
				<div>
					<div>
						<FaPhoneVolume className="mx-1" /> 5555-5555-5555
					</div>
					<div>
						<FaEnvelope className="mx-1" /> makena-tours@eastafrica.com
					</div>
				</div>
				<hr />
				<div>
					<p className="mb-0">
						&copy;{new Date().getFullYear()} Elena & Emilia Tours Ltd. All
						Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
