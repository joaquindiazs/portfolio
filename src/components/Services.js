import React, { Component } from "react";
import ServicesImg from "../assets/img/services.jpg";
import "./Services.css";

class Services extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			recentPojects: []
		};
	}

	componentDidMount() {
		fetch("http://localhost:3001/api/projects/recentProjects/")
			.then(res => res.json())
			.then(
				result => {
					this.setState({
						isLoaded: true,
						recentProjects: result
					});
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				error => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
	}

	render() {
		const { error, isLoaded, recentProjects } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className="section-wrapper">
					<div className="block-wrapper">
						<div className="section-title">
							<span>What I learned</span>
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
							{recentProjects.map((project, i) => (
								<div className="item-wrapper" key={i}>
									<img src={project.url} alt="text" />
									<div className="item-description">
										<a href="#a1">
											<h3>{ project.name }</h3>
											<span>{ project.description }</span>
										</a>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			);
		}
	}
}

export default Services;
