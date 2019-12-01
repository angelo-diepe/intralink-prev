import React from 'react';
import Slider from '../Slider/Slider.js';
import ActuCard from '../../components/ActuCard/ActuCard.js'
import ActuList from '../../components/ActuList/ActuList.js'
import "./Actu.css";

class Actu extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="actu-container" className="animated slideInRight delay-1s">
				<Slider/>
				<ActuList>
					<ActuCard/>
				</ActuList>
			</div>
		);
	}
}
export default Actu;