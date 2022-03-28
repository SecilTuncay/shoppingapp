import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
	return (
		<footer className=" mt-auto">
			<div className="container d-md-flex p-2 justify-content-between align-items-center">
				<div className="me-md-auto text-center text-md-start text-white">
					<div>
						<span>Katalog App </span>&copy; Her Hakkı Saklıdır.
					</div>
				</div>
				<div className="d-flex pt-3 pt-md-0 justify-content-center">
					<div className="text-white m-2">
						<FontAwesomeIcon icon={faFacebook} />
					</div>
					<div className="text-white m-2">
						<FontAwesomeIcon icon={faTwitter} />
					</div>
					<div className="text-white m-2">
						<FontAwesomeIcon icon={faInstagram} />
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
