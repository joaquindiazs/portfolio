import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			condition: false
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({
			condition: !this.state.condition
		});
	}

	render() {
		return (
			<div className="main-page-wrapper">
				<Svg
					className={
						this.state.condition ? "ham ham2 active" : "ham ham2"
					}
					toggleClassName={this.handleClick}
				/>
				<Navigation 
					className={
						this.state.condition ? "visible" : ""
					} />
				<Footer />
			</div>
		);
	}
}

class Svg extends Component {
	render() {
		return (
			<svg
				className={this.props.className}
				viewBox="0 0 100 100"
				width="80"
				onClick={this.props.toggleClassName}
			>
				<path
					className="line top"
					d="m 70,33 h -40 c -6.5909,0 -7.763966,-4.501509 -7.763966,-7.511428 0,-4.721448 3.376452,-9.583771 13.876919,-9.583771 14.786182,0 11.409257,14.896182 9.596449,21.970818 -1.812808,7.074636 -15.709402,12.124381 -15.709402,12.124381"
				/>
				<path className="line middle" d="m 30,50 h 40" />
				<path
					className="line bottom"
					d="m 70,67 h -40 c -6.5909,0 -7.763966,4.501509 -7.763966,7.511428 0,4.721448 3.376452,9.583771 13.876919,9.583771 14.786182,0 11.409257,-14.896182 9.596449,-21.970818 -1.812808,-7.074636 -15.709402,-12.124381 -15.709402,-12.124381"
				/>
			</svg>
		);
	}
}

export default App;
