import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
	render() {
		return (
			<div className="section-wrapper">
				<div className="block-wrapper">
					<div className="section-title">
						<span>Take a look at</span>
						<h2>My Projects</h2>
					</div>
					<div className="gallery-wrapper">
						<div className="item-wrapper">
							<img
								src="https://source.unsplash.com/random/320x240"
								alt="text"
							/>
							<div className="item-description">
								<a href="#a1">
									<h3>Project #1</h3>
									<span>Aasdf</span>
								</a>
							</div>
						</div>
						<div className="item-wrapper">
							<img
								src="https://source.unsplash.com/random/320x240"
								alt="text"
							/>
							<div className="item-description">
								<a href="#a2">
									<h3>Project #2</h3>
									<span>Aasdf</span>
								</a>
							</div>
						</div>
						<div className="item-wrapper">
							<img
								src="https://source.unsplash.com/random/320x240"
								alt="text"
							/>
							<div className="item-description">
								<a href="#a3">
									<h3>Project #3</h3>
									<span>Aasdf</span>
								</a>
							</div>
						</div>
						<div className="item-wrapper">
							<img
								src="https://source.unsplash.com/random/320x240"
								alt="text"
							/>
							<div className="item-description">
								<a href="#a4">
									<h3>Project #4</h3>
									<span>Aasdf</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
