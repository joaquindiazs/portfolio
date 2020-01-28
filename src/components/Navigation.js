import React, { Component } from "react";
import "./Navigation.css";

class Navigation extends Component {
	render() {
		return (
			<aside>
				<h1 className="logo">
					<a href="#asdf">
						JDIAZS
						<span>INNOVATIVE GROUP</span>
					</a>
				</h1>
				<nav className="main-menu">
					<ul>
						<li className="">
							<a href="#asdf" aria-current="page">
								Home
							</a>
						</li>
						<li className="">
							<a href="#asdf/">About</a>
						</li>
						<li className="">
							<a href="#asdf/">Works</a>
						</li>
						<li className="">
							<a href="#asdf/">Services</a>
						</li>
						<li className="">
							<a href="#asdf/">Blog</a>
						</li>
						<li className="">
							<a href="#asdf/">Contact</a>
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
						<small>© jdiazs 2020 | All rights reserved on texts and images. </small>
					</p>
				</div>
			</aside>
		);
	}
}

export default Navigation;
