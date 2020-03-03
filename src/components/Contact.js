import React, { Component } from "react";
import "./Contact.scss";

class Contact extends Component {
	render() {
		return (
			<div className="section-wrapper">
				<div className="block-wrapper">
					<div className="contact-wrapper">
						<div className="contact-content">
							<h3>Contact Info</h3>
							<p>
								<ion-icon name="phone-portrait"></ion-icon> &nbsp; +49 15770961763
							</p>
							<p>
								<ion-icon name="mail-open"></ion-icon> &nbsp; joaquindiazschillagi@gmail.com
							</p>
							<p>
								<ion-icon name="pin"></ion-icon> &nbsp; Kassel, 35125 - Germany
							</p>
						</div>
						<div className="contact-form">
							<h3>
								Contact Form
							</h3>
							<p>
								I would like to hear about you
							</p>
							<form action="">
								<p>
									<label htmlFor="">
										Your Name (required)
										<span>
											<input type="text"/>
										</span>
									</label>
								</p>
								<p>
									<label htmlFor="">
										Your Email (required)
										<span>
											<input type="text"/>
										</span>
									</label>
								</p>
								<p>
									<label htmlFor="">
										Subject
										<span>
											<input type="text"/>
										</span>
									</label>
								</p>
								<p>
									<label htmlFor="">
										Message
										<span>
											<textarea type="text" rows='4'/>
										</span>
									</label>
								</p>
								<p>
									<input type="submit" value="Send"/>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
