import React from 'react'
import './Slide.css';

const Slide = ({img,view,author,publish}) => {
	return (
		<div className="slide" style={{backgroundImage:`url(${img})`}}>
			<div id="info-slide">
				<span id="publish">Publish:{"  "+publish}</span>
				<span id="author">By:{"  "+author}</span>
				<span id="views" style={{textAlign:"right"}}>View:{"  "+view}</span>
			</div>
		</div>
	)
}

export default Slide