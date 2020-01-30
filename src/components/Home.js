import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import Footer from './Footer'
import 'swiper/css/swiper.css'
import SlideOne from '../assets/img/slide-01.jpg';
import SlideTwo from '../assets/img/slide-02.jpg';
import SlideThree from '../assets/img/slide-03.jpg';

import './Home.css'

class Home extends Component {
	render() {
		const params = {
		    effect: 'fade',
	        direction: 'vertical',
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			},
			autoplay: {
		        delay: 4000,
		        disableOnInteraction: false
      		}
		}
		return(
			<div className="home-wrapper">
				<Swiper {...params}>
				    <div style={{'backgroundImage': `url(${SlideOne})`}}>
				    	<div className="slider-title-wrapper">
							<h1>Web Development</h1>
				    	</div>
				    </div>
				    <div style={{'backgroundImage': `url(${SlideTwo})`}}>
				    <div className="slider-title-wrapper">
							<h1>Design & Photography</h1>
				    	</div>
			    	</div>
				    <div style={{'backgroundImage': `url(${SlideThree})`}}>
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
				</div>
				<Footer />
			</div>
		)
	}
}

export default Home;