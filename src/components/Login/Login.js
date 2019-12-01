import React from 'react';
import './Login.css'

class  Login extends React.Component {
	constructor(props){
		super(props);
		this.state={
			intraRoute:'login'
		}
	}
	onIntraRouteChange(route){
		this.setState({intraRoute:route})
	}
	render(){
		return (
			(this.state.intraRoute==="login")?
			<div id="form-login" className="form-login animated zoomIn">
			<header className="header-login"><a onClick={()=>this.props.changeRoute('intro')}>&times;</a></header>
			<section className="section-login">
			<div id="id-input">
			<span>Id:</span>
			<input type="text" placeholder="1800..." className="input-login"/>
			</div>
			<div id="password-input">
			<span>Password:</span>
			<input type="password" className="input-login"/>
			</div>
			<button onClick={()=>{this.props.setLoggedIn();this.props.changeRoute('home')}}>Login</button>
			</section>
			<footer className="footer-login">
			<a onClick={()=>this.onIntraRouteChange('forgot-pwd')}>Forgot Password</a>
			<div>Not yet a member? <a onClick={()=>this.props.changeRoute('signup')}>SignUp</a></div>
			</footer>
			</div>:
			<div id="form-login" className="form-login animated zoomIn">
			<header className="header-login"><a onClick={()=>this.props.changeRoute('intro')}>&times;</a></header>
			<section className="section-login">
			<div className="question">
			<span>Your Surname when you were young?</span>
			<input type="text" className="input-forgot-pwd"/>
			</div>
			<div className="question">
			<span>The name of the town where you were born?</span>
			<input type="text" className="input-forgot-pwd"/>
			</div>
			<div className="question">
			<span>In which school did you have your GCE A/L?</span>
			<input type="text" className="input-forgot-pwd"/>
			</div>
			<button onClick={()=>this.ForgotPwd()}>Send</button>
			</section>
			</div>
			)
	}   
}
export default Login
