import React, {Component} from 'react'
import './Footer.css'

class Footer extends Component {
	render(){
		return(
			<div className="footer-wrapper">
				<div className="footer-item">
					<p>
						© jdiazs 2020 | All rights reserved on texts and images.
					</p>
				</div>
				<div className="footer-item">
					<h2>
						<a href="#asdf">JDIAZS</a>
					</h2>
				</div>
				<div className="footer-item">
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
				</div>
			</div>
			)
	}
}

export default Footer;