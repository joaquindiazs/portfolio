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
							<h2>Personal Summary</h2>
							<p>
								I'm Joaquin, a professional developer from
								Mendoza - Argentina. I'm connected to the IT
								environment since many years.
							</p>
							<p>
								Always willing to learn, improve, and work with
								new technologies.
							</p>
							<p>
								Based in Kassel- Germany, I'm interested in
								working on ambitious projects with positive
								people.
							</p>
							<h4>Professional Summary</h4>
							<p>
								Ssr. Javascript developer, focused on web
								applications.
								<br />
								Good knowledge of Object oriented programming
								(Ruby)
								<br />
								Solid understanding of SQL language and
								Postgresql database server.
								<br />
								GNU/Linux server and services administrator.
								<br />
								Administrator of services and resources in the
								cloud (AWS)
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
								<span>Software Developer</span>
								<ul>
									<li>
										<a
											href="https://www.linkedin.com/in/joaqu%C3%ADn-d%C3%ADaz-schillagi-741354124/"
											target="_blank"
											rel="noopener noreferrer"
										>
											<ion-icon name="logo-linkedin"></ion-icon>
										</a>
									</li>
									<li>
										<a
											href="https://github.com/joaquindiazs"
											target="_blank"
											rel="noopener noreferrer"
										>
											<ion-icon name="logo-github"></ion-icon>
										</a>
									</li>
									<li>
										<a
											href="https://codepen.io/jdiazs"
											target="_blank"
											rel="noopener noreferrer"
										>
											<ion-icon name="logo-codepen"></ion-icon>
										</a>
									</li>
									<li>
										<a
											href="https://www.instagram.com/jdiazs.ar/"
											target="_blank"
											rel="noopener noreferrer"
										>
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
