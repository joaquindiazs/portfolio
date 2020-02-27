import React, { Component } from "react";
import "./Blog.css";

class Blog extends Component {
	render() {
		return (
			<div className="section-wrapper">
				<div className="block-wrapper">
					<div className="section-title">
						<span>Read</span>
						<h2>Blog</h2>
					</div>
					<div className="blog-wrapper">
						<div className="blog-gallery">
							<div className="blog-content">
								<div className="img-box">
									<a href="#asdf">
										</a>
								</div>
								<span>
									{" "}
									June 9, 2019 | <a href="#asdf">Joaquin Diaz</a>
								</span>
								<h3>
									<a href="#asdf">Name of the post</a>
								</h3>
								<div className="blog-text">
									<p>
										Yuroin non lorem ac erat suscipit
										bibendum. Nulla facilisi. Sedeuter nunc
										volutpat, mollis sapien vel, conseyer
										turpeutionyer masin libero semper.
										Fusceler mollis augue sit amet hendrerit
										vestibulum. Duisteyerionyer venenatis
										lacus. Fusce mollis augu
									</p>
									{/*
									<pre>
										<code>
											&lt;div&gt;
											&lt;/div&gt;
									  	</code>
									</pre>
									*/}
								</div>
								<p>
									<a href="#asdf" className="blog-link">
										Read More{" "}
										<ion-icon name="arrow-forward"></ion-icon>
									</a>
								</p>
								<div className="clear"></div>
							</div>
							<div className="blog-content">
								<div className="img-box">
									<a href="#asdf">
									</a>
								</div>
								<span>
									{" "}
									Dec 20, 2018 | <a href="#asdf">Joaquin Diaz</a>
								</span>
								<h3>
									<a href="#asdf">Another name of the post</a>
								</h3>
								<div className="blog-text">
									<p>
										Sedeuter nunc
										volutpat, mollis sapien vel, conseyer
										turpeutionyer masin libero semper.
										Fusceler mollis augue sit amet hendrerit
										vestibulum. Duisteyerionyer venenatis
										lacus. Fusce mollis augu
									</p>
								</div>
								<p>
									<a href="#asdf" className="blog-link">
										Read More{" "}
										<ion-icon name="arrow-forward"></ion-icon>
									</a>
								</p>
								<div className="clear"></div>
							</div>
						</div>
						<div className="filter-content">
							<form className="filter-sidebar-block">
								<label>
									<input
										type="text"
										name="name"
										placeholder="Search..."
									/>
								</label>
							</form>
							<form className="filter-sidebar-block">	
								<div className="filter-sidebar-title">
									Categories
								</div>
								<ul>
									<li>
										<a href="#asdf">
											Brand Identity
										</a>
									</li>
									<li>
										<a href="#asdf">
											Digital Art
										</a>
									</li>
									<li>
										<a href="#asdf">
											Media Planing
										</a>
									</li>
									<li>
										<a href="#asdf">
											UX Design
										</a>
									</li>
								</ul>
							</form>
							<form className="filter-sidebar-block">	
								<div className="filter-sidebar-title">
									Latest Posts
								</div>
								<ul>
									<li>
										<a className="latest-posts" href="#asdf">
											Aguante trukini loco
										</a>
										<span>
											June 9, 2019
										</span>
									</li>
									<li>
										<a className="latest-posts" href="#asdf">
											El arte craftear
										</a>
										<span>
											June 9, 2019
										</span>
									</li>
								</ul>
							</form>
							<form className="filter-sidebar-block">	
								<div className="filter-sidebar-title">
									Archives
								</div>
								<ul>
									<li>
										<a href="#asdf">
											June 2020
										</a>
									</li>
								</ul>
							</form>
							<form className="filter-sidebar-block">	
								<div className="filter-sidebar-title">
									Tags
								</div>
								<div className="filter-tags">
									<a href="#asdf">Ruby</a>
									<a href="#asdf">Angular</a>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Blog;
