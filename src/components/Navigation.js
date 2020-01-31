import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Services from './Services'
import Blog from './Blog'
import Contact from './Contact'

import "./Navigation.css";

class Navigation extends Component {
	render() {
		return (
			<Router>
				<aside>
					<h1 className="logo">
						<Link to={"/"}>
							jdiazs
							<span>INNOVATIVE GROUP</span>
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
							<li>
								<Link to={"/blog"}>Blog</Link>
							</li>
							<li>
								<Link to={"/contact"}>Contact</Link>
							</li>
						</ul>
					</nav>
					<div className="navigation-footer-wrapper">
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
						<p>
							<small>
								© jdiazs 2020 | All rights reserved on texts and
								images.
							</small>
						</p>
					</div>
				</aside>
				<Switch>
		            <Route exact path='/' component={Home} />
		            <Route path='/about' component={About} />
		            <Route path='/projects' component={Projects} />
		            <Route path='/services' component={Services} />
		            <Route path='/blog' component={Blog} />
		            <Route path='/contact' component={Contact} />
	 	        </Switch>

			</Router>
		);
	}
}

export default Navigation;
