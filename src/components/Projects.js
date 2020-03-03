import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProjectVaypol from "../assets/img/project-vaypol.jpg";
import ProjectEntreacequias from "../assets/img/project-entreacequias.jpg";
import ProjectMaple from "../assets/img/project-maple.jpg";
import ProjectCleanlif from "../assets/img/project-cleanlif.jpg";
import ProjectHigea from "../assets/img/project-higea.jpg";
import ProjectLiceoRugbyClub from "../assets/img/project-liceorugbyclub.jpg";
import "./Projects.scss";

class Projects extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		error: null,
	// 		isLoaded: false,
	// 		projects: []
	// 	};
	// }

	// componentDidMount() {
	// 	fetch("http://localhost:3001/api/projects/")
	// 		.then(res => res.json())
	// 		.then(
	// 			result => {
	// 				this.setState({
	// 					isLoaded: true,
	// 					projects: result
	// 				});
	// 			},
	// 			// Note: it's important to handle errors here
	// 			// instead of a catch() block so that we don't swallow
	// 			// exceptions from actual bugs in components.
	// 			error => {
	// 				this.setState({
	// 					isLoaded: true,
	// 					error
	// 				});
	// 			}
	// 		);
	// }

	render() {
		// const { error, isLoaded, projects } = this.state;
		// if (error) {
		// 	return <div>Error: {error.message}</div>;
		// } else if (!isLoaded) {
		// 	return <div>Loading...</div>;
		// } else {
			const projects = [
			{
				"project_id": 0,
				url: ProjectEntreacequias,
				name: "Entre Acequias - Complejo Sustentable",
				created_at: "Dic 2019"
			},
			{
				"project_id": 1,
				url: ProjectVaypol,
				name: "Vaypol",
				created_at: "Jul 2018"
			},
			{
				"project_id": 2,
				url: ProjectMaple,
				name: "Agencia Maple de Publicidad",
				created_at: "Jun 2017"
			},
			{
				"project_id": 3,
				url: ProjectHigea,
				name: "Clínica Higea",
				created_at: "Oct 2016"
			},
			{
				"project_id": 4,
				url: ProjectLiceoRugbyClub,
				name: "Liceo Rugby Club",
				created_at: "Feb 2016"
			},
			{
				"project_id": 5,
				url: ProjectCleanlif,
				name: "Cleanlif S.A",
				created_at: "Sep 2015"
			}
		];
		return (
			<div className="section-wrapper">
				<div className="block-wrapper">
					<div className="section-title">
						<span>Take a look through</span>
						<h2>My Projects</h2>
					</div>
					{/*
							<div className="categories-wrapper">
									<Link to={"/projects"} className="category-filter">Software Development</Link>
									<Link to={"/projects"} className="category-filter">Hosting</Link>
									<Link to={"/projects"} className="category-filter">Design</Link>
									<Link to={"/projects"} className="category-filter">Digital Art</Link>
							</div>
						*/}
					<div className="gallery-wrapper">
						{projects.map((project, i) => (
							<div className="item-wrapper" key={i}>
								<img src={project.url} alt="text" />
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
	// }
}

export default Projects;
