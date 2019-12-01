import React from 'react';
import './Signup.css'

class  Signup extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
					<div id="form-signup" className="form-signup animated fadeInRight">
					<header className="header-login"><a onClick={()=>this.props.changeRoute('intro')}>&#9668;</a></header>
					<section className="section-login">
					<div id="id-input">
					<span>Id:</span>
					<input type="text" placeholder="1800..." className="input-login"/>
					</div>
					<div id="password-input">
					<span>Password:</span>
					<input type="password" className="input-login"/>
					</div>
					<button onClick={()=>this.props.setLoggedIn()}>Login</button>
					</section>
					<footer className="footer-login">
					<div>Already a member? <a onClick={()=>this.props.changeRoute('login')}>Login</a></div>
					</footer>
					</div>
			)
	}   
}
export default Signup;