import React, { Component } from "react";
import AboutUs from "../assets/img/about.jpg";
import "./About.css";

class About extends Component {
	render() {
		return (
			<div className="section-wrapper">
				<div className="block-wrapper">
					<div className="section-title">
						<span>Who I am</span>
						<h2>About</h2>
					</div>
					<div className="about-first-scroll">
						<div className="about-image">
							<img src={AboutUs} alt="" />
						</div>
						<div className="about-description">
							<h2>Innovative Group</h2>
							<p>
								Yuroin non lorem ac erat suscipit bibendum.
								Nulla facilisi. Sedeuter nunte volutpat, mollis
								sapien vel, conseyer turpeutionyer massa in
								libero sempe. Fusceliton mollis augue sit amet
								hendrerit vestibulum. Duiste yerionyer venenatis
								lacus that where it came from iter.
							</p>
							<p>
								Fusce mollis augue sit amet hendrerit
								vestibulum. Duisteyerionyer venenatis lacus
								mollis augue sit amet hendrerit vestibulum.
							</p>
							<p>
								Yuroin non lorem ac erat suscipit bibendum.
								Nulla facilisi. Sedeuter nunte volutpat, mollis
								sapien vel, conseyer turpeutionyer massa in
								libero sempe. Fusceliton mollis augue sit amet
								hendrerit vestibulum. Duiste yerionyer venenatis
								lacus that where it came from iter.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
