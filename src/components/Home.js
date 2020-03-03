import React, { Component } from "react";
import HomeImg from "../assets/img/home-image.png";

import "./Home.scss";

class Home extends Component {
	render() {
		return (
			<div className="section-wrapper">
				<div className="home-image" style={{ backgroundImage: `url(${HomeImg})` }}>
					<div className="home-title-wrapper">
						<h1 className="glitch" data-text="Web Development">Web Development</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
