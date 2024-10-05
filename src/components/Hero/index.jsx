import React, { useEffect, useRef, useState } from "react";

import "./hero.scss";

import { heroData } from "./hero-data";

import arrowIcon from "../../images/icon-arrow.svg";
import prevBtn from "../../images/icon-angle-left.svg";
import nextBtn from "../../images/icon-angle-right.svg";

function index() {
	const [translateNumber, setTranslateNumber] = useState(375);

	const changeTransaletNumberByInnerWidth = () => {
		window.innerWidth >= 1440 ? setTranslateNumber(1440) : setTranslateNumber(375);
	};

	window.addEventListener("load", () => {
		changeTransaletNumberByInnerWidth();
	});

	window.addEventListener("resize", () => {
		slideRef.current.style.transform = "translateX(0px)";
		changeTransaletNumberByInnerWidth();
	});

	const slideRef = useRef();
	let idx = 0;

	const slide = () => {
		if (idx > heroData.length - 1) {
			idx = 2;
		} else if (idx < 0) {
			idx = 0;
		}

		slideRef.current.style.transform = `translateX(${-idx * translateNumber}px)`;
	};

	const handlePrevSlide = () => {
		idx--;
		slide();
	};

	const handleNextSlide = () => {
		idx++;
		slide();
	};

	return (
		<div className="hero">
			<div className="slide-wrapper" ref={slideRef}>
				{heroData.map((data, index) => (
					<div className="slide" key={index}>
						<picture>
							<source media="(min-width: 1440px)" srcSet={data.img.desktop} />
							<img src={data.img.mobile} />
						</picture>

						<div className="slide-text-content-wrapper">
							<div className="slide-text-content">
								<h2 className="hero-title">{data.text.title}</h2>
								<p className="hero-description">{data.text.description}</p>
								<div className="shop-now-btn">
									<span className="btn-text">Shop Now</span>
									<img src={arrowIcon} className="arrow-icon" />
								</div>
							</div>
						</div>

						<div className="slider-buttons">
							<button className="prev-btn" onClick={handlePrevSlide}>
								<img src={prevBtn} />
							</button>
							<button className="next-btn" onClick={handleNextSlide}>
								<img src={nextBtn} />
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default index;
