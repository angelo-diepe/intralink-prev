import React from 'react'
import "./Message.css";
const Message = ({content,destination,time}) => {
	return (
		<div id="message-container" className={(destination==="me")?"right":"left"}>
			{content}
			<span id="time">{time}</span>
		</div>
	)
}

export default Message