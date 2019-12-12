import React from 'react';
import Message from "../../components/Message/Message.js";
import Contact from "../../components/Contact/Contact.js"
import search from "./assets/search.svg";
import send from "./assets/send.png";
import "./Discussion.css";

class Discussion extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="discussion-container" className="animated slideInRight delay-1s">
				<div id="discussion-flow-wrapper">
					<div id="upper-part-flow">
						<div id="profile-status">
							<div id="profil-round"><span id="status-round"></span></div>
							<div id="profil-info">
								<div id="name">Angelo</div>
								<div id="status">Online</div>
							</div>
						</div>
						<div id="options">
							<input type="search" id="flow-search-input" placeholder="Search.."  style={{display:"none"}} onFocus={()=>{
								document.getElementById('flow-search-input')
								.addEventListener('keypress',((e)=>{
									if(e.keyCode===13){document.getElementById('flow-search-icon').style.display="block";
											document.getElementById('flow-search-input').style.display="none";}}))}}/>
							<img src={search} alt="search" id="flow-search-icon" onClick={()=>{
								document.getElementById('flow-search-icon').style.display="none";
								document.getElementById('flow-search-input').style.display="block";}}/>
						</div>
					</div>
					<div id="lower-part-flow">
						<Contact />
						<Contact />
						<Contact />
					</div>
				</div>
				<div id="chat-container">
					<div id="upper-part-chat">
						<div id="profile-status">
							<div id="profil-round"><span id="status-round"></span></div>
							<div id="profil-info">
								<div id="name">Erica</div>
								<div id="status">Online</div>
							</div>
						</div>
					</div>
					<div id="lower-part-chat">
						<div id="message-wrapper">
							<Message content="Hello Sis,How are doing?" time="15:20" destination="me"/>
							<Message content="Hello Bro,I'm doing Good and you?" time="15:30" destination="you"/>
							<Message content="Good Too thanks🤗" time="15:35" destination="me"/>
							<Message content="How is the Day?🌄" time="15:40" destination="you"/>
						</div>
						<div id="message-sender">
							<input type="text" id="input-message" placeholder="say something"/>
							<img src={send} alt="Send message icon" id="sender-img"/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Discussion;