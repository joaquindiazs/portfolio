import React, { Component } from "react";
import { Link } from "react-router-dom";
import ServicesImg from "../assets/img/services.jpg";
import "./Services.scss";
import ProjectVaypol from "../assets/img/project-vaypol.jpg";
import ProjectEntreacequias from "../assets/img/project-entreacequias.jpg";

class Services extends Component {
	render() {
		const recentProjects = [
			{
				project_id: 0,
				url: ProjectEntreacequias,
				name: "Entre Acequias - Complejo Sustentable",
				created_at: "Dic 2019"
			},
			{
				project_id: 1,
				url: ProjectVaypol,
				name: "Vaypol",
				created_at: "Jul 2018"
			}
		];
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
										<li>CaaS</li>
									</ul>
								</div>
							</div>
							<div className="service-item">
								<ion-icon name="create"></ion-icon>
								<h3>Design</h3>
								<div className="services-description">
									<ul>
										<li>Mock-up</li>
										<li>Layouts</li>
										<li>Photography</li>
									</ul>
								</div>
							</div>
							<div className="service-item">
								<ion-icon name="tv"></ion-icon>
								<h3>SEO</h3>
								<div className="services-description">
									<ul>
										<li>Best Practices</li>
										<li>Analytics</li>
										<li>E-Mail Marketing</li>
									</ul>
								</div>
							</div>
						</div>
						<div
							className="services-image"
							style={{
								backgroundImage: `linear-gradient(rgba(10,10,10,.4),rgba(0,0,0,.4)), repeating-linear-gradient(0, transparent, transparent 2px, black 3px, black 3px),url(${ServicesImg})`
							}}
						></div>
					</div>
				</div>
				<div className="block-wrapper">
					<div className="section-title">
						<span>Portfolio</span>
						<h2>Recent projects</h2>
					</div>
					<div className="gallery-wrapper">
						{recentProjects.map((project, i) => (
							<div className="item-wrapper item-image-container" key={i}>
								<img src={project.url} alt="jdiazs" />
								<div className="item-description">
									<Link
										to={`/projects/${project.project_id}`}
									>
										<h3>{project.name}</h3>
										<span>
											{new Date(
												project.created_at
											).toDateString()}
										</span>
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default Services;
