import React, { Component } from "react";
import HomeImg from "../assets/img/home-image.png";
import Logo from "../assets/img/logo.png";

import "./Home.scss";

class Home extends Component {
	render() {
		return (
			<div className="section-wrapper">
				<div className="home-image" style={{ backgroundImage: `url(${HomeImg})` }}>
					<div className="glitch-img" style={{ backgroundImage: `url(${Logo})` }}>
						<div className="glitch-img-inner" style={{ backgroundImage: `url(${Logo})` }}></div>
						<div className="glitch-img-inner-2"  style={{ backgroundImage: `url(${Logo})` }}></div>
					</div>
					<div className="home-title-wrapper">
						<h1 className="glitch" data-text="Web Development">Web Development</h1>
					</div>
					<div className="box-cell-1">&nbsp;</div>
					<div className="box-cell-2">&nbsp;</div>
				</div>
			</div>
		);
	}
}

export default Home;
