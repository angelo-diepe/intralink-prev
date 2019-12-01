import React from 'react';
import vect1 from './assets/1.png'
import vect2 from './assets/2.png'
import vect3 from './assets/3.png'
import vect4 from './assets/4.png'
import vect6 from './assets/6.png'
import vect7 from './assets/7.png'
import './Vector.css';

const Vector = () => {
	return (
		<div id="vector-container">	
			<img src={vect1} alt="vect1" id="vect1"/>
			<img src={vect2} alt="vect2" id="vect2"/>
			<img src={vect3} alt="vect3" id="vect3"/>
			<img src={vect4} alt="vect4" id="vect4"/>
			<img src={vect6} alt="vect6" id="vect6"/>
			<img src={vect7} alt="vect7" id="vect7"/>
		</div>
	)
}

export default Vector