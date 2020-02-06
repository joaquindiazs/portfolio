import React, { Component } from "react";
import ServicesImg from "../assets/img/services.jpg";
import './Services.css'

class Services extends Component {
	render() {
		return (
			<div className="section-wrapper">
				<div className="block-wrapper">
					<div className="section-title">
						<span>What I do</span>
						<h2>Services</h2>
					</div>
					<div className="services-wrapper">
						<div className="services-content">
							<div className="service-item">
								<ion-icon name="code-working"></ion-icon>
								<h3>Web App</h3>
								<div className="services-description">
									<ul>
										<li>Fullstack</li>
										<li>Responsive</li>
										<li>Native apps</li>
									</ul>
								</div>
							</div>
							<div className="service-item">
								<ion-icon name="cloud-upload"></ion-icon>
								<h3>Hosting</h3>
								<div className="services-description">
									<ul>
										<li>IaaS</li>
										<li>PaaS</li>
										<li>Email Hosting</li>
									</ul>
								</div>
							</div>
							<div className="service-item">
								<ion-icon name="create"></ion-icon>
								<h3>Design</h3>
								<div className="services-description">
									<ul>
										<li>Branding</li>
										<li>Layouts</li>
										<li>Photography</li>
									</ul>
								</div>
							</div>
							<div className="service-item">
								<ion-icon name="tv"></ion-icon>
								<h3>Art Digital</h3>
								<div className="services-description">
									<ul>
										<li>Animation</li>
										<li>Modeling</li>
										<li>Sculpting</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="services-image">
							<img src={ServicesImg} alt="" />
						</div>
					</div>
				</div>
				<div className="block-wrapper">
					<div className="section-title">
						<span>Portfolio</span>
						<h2>Recent projects</h2>
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
					</div>
				</div>
			</div>
		);
	}
}

export default Services;
