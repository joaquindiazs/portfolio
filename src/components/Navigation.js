import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Services from "./Services";
import Blog from "./Blog";
import Contact from "./Contact";
import Project from './Project'

import "./Navigation.scss";

class Navigation extends Component {
	render() {
		return (
			<Router>
				<aside className={this.props.className}>
					<h1 className="logo">
						<Link to={"/"}>
							jdiazs
							{/*<span>From A Basement</span>*/}
						</Link>
					</h1>
					<nav className="main-menu">
						<ul>
							<li>
								<Link to={"/"}>Home</Link>
							</li>
							<li>
								<Link to={"/about"}>About</Link>
							</li>
							<li>
								<Link to={"/projects"}>Projects</Link>
							</li>
							<li>
								<Link to={"/services"}>Services</Link>
							</li>
							{/*
							<li>
								<Link to={"/blog"}>Blog</Link>
							</li>
							*/}
							<li>
								<Link to={"/contact"}>Contact</Link>
							</li>
						</ul>
					</nav>
					<div className="navigation-footer-wrapper">
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
						<p>
							<small>
								© jdiazs 2020 | All rights reserved on texts and
								images.
							</small>
						</p>
					</div>
				</aside>

				{/* A <Switch> looks through its children <Route>s and
            		renders the first one that matches the current URL. */}
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route exact path="/projects" component={Projects} />
					<Route path="/services" component={Services} />
					<Route path="/blog" component={Blog} />
					<Route path="/contact" component={Contact} />
					<Route path="/projects/:project_id" component={Project} />
				</Switch>
			</Router>
		);
	}
}

export default Navigation;
