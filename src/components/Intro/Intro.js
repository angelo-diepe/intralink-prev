import React from 'react';
import Logo from '../Logo/Logo.js';
import './Intro.css'

export default class Intro extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 
			 	"Community Local Network || Discussion Plateform",
			show: "",
			count:0,
			showButton:false
		}
	}
	update(){
		let length = this.state.text.length;
		let count = this.state.count;
		let letter = this.state.text.charAt(count)

		if(count <= length){
			this.setState({show:this.state.show+letter},()=>this.setState({count:this.state.count+1}))
		}
		else if(count=== length+1){
			clearInterval(this.typeTimer);
			this.setState({showButton:true})
		}
	}
	componentDidMount() {
		 this.typeTimer = setInterval(()=>
		 		this.update()
			,125)
	}
	
	render() {
		return (
			<div className="intro-container"> 
				<h3 id="slogan">{this.state.show}_</h3>
				{(this.state.showButton)?
				<button id="intro-button" className="animated fadeInUp" onClick={()=>this.props.changeRoute('login')}>Get Started</button>
				:null}
			</div>
		);
	}
}
