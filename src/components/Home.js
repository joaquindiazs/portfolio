import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'
import SlideOne from '../assets/img/slide-01.jpg';
import SlideTwo from '../assets/img/slide-02.jpg';
import SlideThree from '../assets/img/slide-03.jpg';

import './Home.css'

class Home extends Component {
	render() {
		const params = {
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			},
		}
		return(
			<div className="home-wrapper">
				<Swiper {...params}>
				    <div style={{'backgroundImage': `url(${SlideOne})`}}>SLIDE 1</div>
				    <div style={{'backgroundImage': `url(${SlideTwo})`}}>SLIDE 2</div>
				    <div style={{'backgroundImage': `url(${SlideThree})`}}>SLIDE 3</div>
				</Swiper>
				<div className="otraCosa">
					asdfasdf 
					asdfasdf
					asdfasdf
				</div>
			</div>
		)
	}
}

export default Home;