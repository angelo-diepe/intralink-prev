import React from 'react'
import "./Contact.css";
const Contact = ({content,destination,time}) => {
	return (
		<div id="contact-container"  onClick={(e)=>{
			if(document.querySelector('.current-contact'))document.querySelector('.current-contact').classList.remove('current-contact');
			e.currentTarget.classList.add('current-contact');
		}}>
			<div id="contact-round">
				<span id="contact-status-round"></span>
			</div>
			<div id="contact-info">
				<div id="name">Gaetan</div>
				<div id="last">Bonjour Cdk? Ya Cour Aujourdhui?</div>
			</div>
		</div>
		)
}

export default Contact