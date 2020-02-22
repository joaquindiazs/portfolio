import React, { Component } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import SlideOne from "../assets/img/slide-01.jpg";
import SlideTwo from "../assets/img/slide-02.jpg";
import SlideThree from "../assets/img/slide-03.jpg";

import "./Home.css";

class Home extends Component {
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
		const params = {
			effect: "fade",
			direction: "vertical",
			pagination: {
				el: ".swiper-pagination",
				type: "bullets",
				clickable: true
			},
			autoplay: {
				delay: 4000,
				disableOnInteraction: false
			}
		};
		const { error, isLoaded, recentProjects } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className="section-wrapper">
					<Swiper {...params}>
						<div style={{ backgroundImage: `url(${SlideOne})` }}>
							<div className="slider-title-wrapper">
								<h1>Web Development</h1>
							</div>
						</div>
						<div style={{ backgroundImage: `url(${SlideTwo})` }}>
							<div className="slider-title-wrapper">
								<h1>Design & Photography</h1>
							</div>
						</div>
						<div style={{ backgroundImage: `url(${SlideThree})` }}>
							<div className="slider-title-wrapper">
								<h1>Cloud Solutions</h1>
							</div>
						</div>
					</Swiper>
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

export default Home;
