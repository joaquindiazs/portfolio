import React, { Component } from "react";
import AboutUs from "../assets/img/about.jpg";
import ProfileOne from "../assets/img/profile-01.jpg";
import ProfileTwo from "../assets/img/profile-02.jpg";
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
					<div className="about-wrapper">
						<div className="about-image">
							<img src={AboutUs} alt="" />
						</div>
						<div className="about-description">
							<h2>Be Recreative</h2>
							<p>
								I'm a professional mate from Mendoza - Argentina, connected to the IT environment since many
								years ago.
							</p>
							<p>
								As a well organized person. My objectives are
								keep growing up, learning new things of interest and stay always updated with the
								best technologies.
							</p>
							<p>
								Based in Kassel- Germany, I'm interested in
								working on ambitious projects with positive
								people.
							</p>
						</div>
					</div>
				</div>
				<div className="block-wrapper">
					<div className="section-title">
						<span>Know more</span>
						<h2>Colaborators</h2>
					</div>
					<div className="gallery-wrapper">
						<div className="item-wrapper">
							<img src={ProfileOne} alt="" />
							<div className="item-description">
								<h3>Joaquin Diaz</h3>
								<span>Developer</span>
								<ul>
									<li>
										<a href="#asdf" target="_blank">
											<ion-icon name="logo-linkedin"></ion-icon>
										</a>
									</li>
									<li>
										<a href="#asdf" target="_blank">
											<ion-icon name="logo-github"></ion-icon>
										</a>
									</li>
									<li>
										<a href="https://codepen.io/jdiazs" target="_blank" rel="noopener noreferrer">
											<ion-icon name="logo-codepen"></ion-icon>
										</a>
									</li>
									<li>
										<a href="#asdf" target="_blank">
											<ion-icon name="logo-instagram"></ion-icon>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="item-wrapper">
							<img src={ProfileTwo} alt="" />
							<div className="item-description">
								<h3>Camilo Vega</h3>
								<span>Photographer</span>
								<ul>
									<li>
										<a href="#asdf" target="_blank">
											<ion-icon name="logo-linkedin"></ion-icon>
										</a>
									</li>
									<li>
										<a href="#asdf" target="_blank">
											<ion-icon name="logo-github"></ion-icon>
										</a>
									</li>
									<li>
										<a href="#asdf" target="_blank">
											<ion-icon name="logo-instagram"></ion-icon>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
