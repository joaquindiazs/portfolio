import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			projects: []
		};
	}

	componentDidMount() {
		fetch("http://localhost:3001/api/projects/")
			.then(res => res.json())
			.then(
				result => {
					this.setState({
						isLoaded: true,
						projects: result
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
		const { error, isLoaded, projects } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			console.log(projects)
			return (
				<div className="section-wrapper">
					<div className="block-wrapper">
						<div className="section-title">
							<span>Take a look through</span>
							<h2>My Projects</h2>
						</div>
						<div className="gallery-wrapper">
							{projects.map(project => (
								<div className="item-wrapper">
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

export default Projects;
