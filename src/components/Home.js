import React, { Component } from "react";
import HomeImg from "../assets/img/home-image.png";
import Logo from "../assets/img/logo.png";

import "./Home.scss";

class Home extends Component {
	render() {
		return (
			<div className="section-wrapper">
				<div className="home-image" style={{ backgroundImage: `url(${HomeImg})` }}>
					<img src={Logo} alt="" className="home-logo"/>
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
