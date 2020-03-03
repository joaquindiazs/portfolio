import React, { Component } from "react";
import AboutUs from "../assets/img/about.jpg";
import "./About.scss";

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
						<div
							className="about-image"
							style={{
								backgroundImage: `linear-gradient(rgba(10,10,10,.4),rgba(0,0,0,.1)), repeating-linear-gradient(0, transparent, transparent 2px, black 3px, black 3px),url(${AboutUs})`
							}}
						></div>
						<div className="about-description">
							<p>
								I'm Joaquin Diaz. Motivated, resourceful and thoughtful software developer from Mza.,Argentina.
							</p>
							<p>
								As a well organized person, my current
								objectives are keep growing up and learn new
								things of interest.
							</p>
							<p>
								Living in Kassel- Germany, I'm providing
								outsourcing services and looking to participate
								in ambitious projects with positive people.
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
							<h4>Personal Summary</h4>
							<p>
								Excellent communication and team working skills.
								<br />
								Great interaction with internal and external
								customers.
								<br />
								Always willing to learn, improve, and work with
								new technologies.
							</p>
						</div>
					</div>
				</div>
				{/* 
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
				*/}
			</div>
		);
	}
}

export default About;
