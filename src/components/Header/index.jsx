import React, { useState } from "react";

import "./header.scss";
import hamburgerIcon from "../../images/icon-hamburger.svg";
import logo from "../../images/logo.svg";
import closeIcon from "../../images/icon-close.svg";

function index() {
	const [showMobileNav, setShowMobileNav] = useState(false);

	return (
		<header>
			<img src={hamburgerIcon} className="hamburger-icon" onClick={() => setShowMobileNav(true)} />
			<img src={logo} className="logo" />

			<div className="desktop-nav">
				<div className="desktop-links">
					<a href="#">home</a>
					<a href="#">shop</a>
					<a href="#">about</a>
					<a href="#">contact</a>
				</div>
			</div>

			{showMobileNav && (
				<>
					<div className="mobile-nav">
						<img src={closeIcon} className="close-icon" onClick={() => setShowMobileNav(false)} />

						<div className="mobile-links">
							<a href="#">home</a>
							<a href="#">shop</a>
							<a href="#">about</a>
							<a href="#">contact</a>
						</div>
					</div>

					<div className="overlay"></div>
				</>
			)}
		</header>
	);
}

export default index;
