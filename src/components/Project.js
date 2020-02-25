import React, { Component } from "react";
import "./Project.css";
import parse from "html-react-parser";

const loopbackFilter =
	"filter=%7B%20%22include%22%3A%20%5B%20%7B%20%22relation%22%20%3A%20%22tags%22%2C%20%22scope%22%3A%20%7B%20%22fields%22%3A%20%5B%20%22name%22%20%5D%20%7D%20%7D%2C%20%7B%20%22relation%22%3A%20%22categories%22%20%7D%20%5D%20%7D";
class Project extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			project: {}
		};
	}

	componentDidMount() {
		fetch(
			`http://localhost:3001/api/projects/${this.props.match.params.project_id}?${loopbackFilter}`
		)
			.then(res => res.json())
			.then(
				result => {
					this.setState({
						isLoaded: true,
						project: result
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
		const { error, isLoaded, project } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			let date = new Date(project.created_at);
			return (
				<div className="section-wrapper">
					<div className="block-wrapper">
						<div className="section-title">
							<span>Portfolio</span>
							<h2>{project.name}</h2>
						</div>
						<div className="project-wrapper">
							<img src={project.url} alt="" width="100%" />
							<div className="project-description">
								<span>{date.toDateString()}</span>
								{ project.description ? parse(project.description): parse("<p style='color:lightgray; font-weight:900'>Description not available</p>")}
								<ul>
									<li>
										<b>Project Name: </b>
										{project.name}
									</li>
									<li>
										<b>Client: </b>
										{project.client}
									</li>
									<li>
										<b>Skills: </b>
										{project.tags.map((tag, i) => (
											<span className="tag-name" key={i}>
												{tag.name}{project.tags.length === i+1? "": " - "}
											</span>
										))}
									</li>
									<li>
										<b>Category: </b>
										{project.categories.map((category, i) => (
											<span className="category-name" key={i}>
												{category.name}{project.categories.length === i+1? "": " - "}
											</span>
										))}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default Project;
