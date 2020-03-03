import React, { Component } from "react";
import "./Project.scss";
import ProjectVaypol from "../assets/img/project-vaypol.jpg";
import ProjectEntreacequias from "../assets/img/project-entreacequias.jpg";
import ProjectMaple from "../assets/img/project-maple.jpg";
import ProjectCleanlif from "../assets/img/project-cleanlif.jpg";
import ProjectHigea from "../assets/img/project-higea.jpg";
import ProjectLiceoRugbyClub from "../assets/img/project-liceorugbyclub.jpg";
import parse from "html-react-parser";

// const loopbackFilter =
// "filter=%7B%20%22include%22%3A%20%5B%20%7B%20%22relation%22%20%3A%20%22tags%22%2C%20%22scope%22%3A%20%7B%20%22fields%22%3A%20%5B%20%22name%22%20%5D%20%7D%20%7D%2C%20%7B%20%22relation%22%3A%20%22categories%22%20%7D%20%5D%20%7D";
class Project extends Component {
	constructor(props) {
		super(props);
		console.log(props.match.params.project_id);
	}

	// componentDidMount() {
	// 	fetch(
	// 		`http://localhost:3001/api/projects/${this.props.match.params.project_id}?${loopbackFilter}`
	// 	)
	// 		.then(res => res.json())
	// 		.then(
	// 			result => {
	// 				this.setState({
	// 					isLoaded: true,
	// 					project: result
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
		// const { error, isLoaded, project } = this.state;
		// if (error) {
		// 	return <div>Error: {error.message}</div>;
		// } else if (!isLoaded) {
		// 	return <div>Loading...</div>;
		// } else {

		const projects = [
			{
				project_id: 0,
				url: ProjectEntreacequias,
				name: "Entre Acequias - Complejo Sustentable",
				created_at: "Dic 2019",
				client: "Entre Acequias - Arq.María Laura Schillagi",
				link: "http://entreacequias.com/",
				link_name: "www.entreacequias.com",
				tags: [
					{
						name: "Ruby on Rails"
					},
					{
						name: "PostgreSQL"
					},
					{
						name: "Heroku"
					},
					{
						name: "Bootstrap"
					}
				],
				"categories": [
					{
						"name": "Web Development"
					},
					{
						"name": "Design"
					},
					{
						"name": "Hosting"
					}
				]
			},
			{
				project_id: 1,
				url: ProjectVaypol,
				name: "Vaypol",
				created_at: "Jul 2018",
				client: "Vaypol - Casa de Deportes",
				link: "http://vaypol.com/",
				link_name: "www.vaypol.com",
				tags: [
					{
						name: "Ruby on Rails"
					},
					{
						name: "PostgreSQL"
					},
					{
						name: "Amazon Web Services"
					},
					{
						name: "GNU/Linux"
					},
					{
						"name": "Boostrap"
					}
				],
				"categories": [
					{
						"name": "Web Development"
					},
					{
						"name": "Hosting"
					},
					{
						"name": "DevOps"
					}
				]
			},
			{
				project_id: 2,
				url: ProjectMaple,
				name: "Agencia Maple de Publicidad",
				created_at: "Jun 2017",
				client: "Agencia Maple",
				link: "https://agenciamaple.com/",
				link_name: "www.agenciamaple.com",
				tags: [
					{
						name: "Wordpress"
					},
					{
						name: "MySQL"
					},
					{
						name: "PHP"
					},
					{
						name: "JQuery"
					}
				],
				"categories": [
					{
						"name": "Web Development"
					},
					{
						"name": "Hosting"
					}
				]
			},
			{
				project_id: 3,
				url: ProjectHigea,
				name: "Clínica Higea",
				created_at: "Oct 2016",
				client: "Agencia Maple",
				link: "http://higea.com.ar/",
				link_name: "www.higea.com.ar",
				tags: [
					{
						name: "MySQL"
					},
					{
						name: "PHP"
					},
					{
						name: "JQuery"
					}
				],
				"categories": [
					{
						"name": "Web Development"
					},
					{
						"name": "Hosting"
					}]
			},
			{
				project_id: 4,
				url: ProjectLiceoRugbyClub,
				name: "Liceo Rugby Club",
				created_at: "Feb 2016",
				client: "Agencia Maple",
				link: "http://liceorugbyclub.com.ar/",
				link_name: "www.liceorugbyclub.com.ar",
				tags: [
					{
						name: "HTML 5"
					},
					{
						name: "CSS 3"
					},
					{
						name: "JQuery"
					},
					{
						name: "Bootstrap"
					}
				],
				"categories": [
					{
						"name": "Web Development"
					},
					{
						"name": "Hosting"
					}]
			},
			{
				project_id: 5,
				url: ProjectCleanlif,
				name: "Cleanlif S.A",
				created_at: "Sep 2015",
				client: "Cleanlif S.A - Limpieza Coorporativa",
				link: "http://cleanlif.com.ar/",
				link_name: "www.cleanlif.com.ar",
				tags: [
					{
						name: "HTML 5"
					},
					{
						name: "CSS 3"
					},
					{
						name: "JQuery"
					},
					{
						name: "Bootstrap"
					}
				],
				"categories": [
					{
						"name": "Web Development"
					},
					{
						"name": "Hosting"
					},
					{
						"name": "Design"
					}
				]
			}
		];

		let date = new Date(
			projects[this.props.match.params.project_id].created_at
		);
		return (
			<div className="section-wrapper">
				<div className="block-wrapper">
					<div className="section-title">
						<span>Portfolio</span>
						<h2>
							{projects[this.props.match.params.project_id].name}
						</h2>
					</div>
					<div className="project-wrapper">
						<div className="image-container">
							<img
								src={
									projects[this.props.match.params.project_id]
										.url
								}
								alt=""
							/>
						</div>
						<div className="project-description">
							<span>{date.toDateString()}</span>
							{projects[this.props.match.params.project_id]
								.description
								? parse(
										projects[
											this.props.match.params.project_id
										].description
								  )
								: parse(
										"<p style='color:lightgray; font-weight:900'>Description not available</p>"
								  )}
							<ul>
								<li>
									<b>Project Name: </b>
									{
										projects[
											this.props.match.params.project_id
										].name
									}
								</li>
								<li>
									<b>Client: </b>
									{
										projects[
											this.props.match.params.project_id
										].client
									}
								</li>
								<li>
									<b>Skills: </b>
									{projects[
										this.props.match.params.project_id
									].tags.map((tag, i) => (
										<span className="tag-name" key={i}>
											{tag.name}
											{projects[
												this.props.match.params
													.project_id
											].tags.length ===
											i + 1
												? ""
												: " - "}
										</span>
									))}
								</li>
								<li>
									<b>Category: </b>
									{ projects[this.props.match.params.project_id].categories.map((category, i) => (
										<span className="category-name" key={i}>
											{category.name}
											{projects[this.props.match.params.project_id].categories.length === i + 1
												? ""
												: " - "}
										</span>
									)) }
								</li>
								<li>
									<b>Link: </b>
									<a
										href={
											projects[
												this.props.match.params
													.project_id
											].link
										}
										target="_blank"
										rel="noopener noreferrer"
									>
										{
											projects[
												this.props.match.params
													.project_id
											].link_name
										}
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
	// }
}

export default Project;
