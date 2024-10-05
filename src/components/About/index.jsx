import React from "react";

import "./about.scss";

import aboutDarkImage from "../../images/image-about-dark.jpg";
import aboutLightImage from "../../images/image-about-light.jpg";

function index() {
	return (
		<div className="about">
			<img src={aboutDarkImage} />

			<div className="about-text-content-wrapper">
				<div className="about-text-content">
					<h3 className="about-title">About our furniture</h3>
					<p className="about-description">
						Our multifunctional collection blends design and function to suit your individual taste.
						Make each room unique, or pick a cohesive theme that best express your interests and
						what inspires you. Find the furniture pieces you need, from traditional to contemporary
						styles or anything in between. Product specialists are available to help you create your
						dream space.
					</p>
				</div>
			</div>

			<img src={aboutLightImage} />
		</div>
	);
}

export default index;
