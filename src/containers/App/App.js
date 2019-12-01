import React from 'react';
import {connect} from "react-redux";
import Aux from '../../containers/HOC/HOC.js';
import Intro from '../../components/Intro/Intro.js';
import Vector from '../../components/Vector/Vector.js';
import Login from '../../components/Login/Login.js';
import Signup from '../../components/Signup/Signup.js';
import Logo from '../../components/Logo/Logo.js';
import Home from '../Home/Home.js';
import './App.css';
import {changeRoute,setLoggedIn} from "../Redux/actions.js"

const mapStateToProps=state=>({
	route:state.handleRoute.route,
	isLog:state.handleLogging.isLog,
	// user:state.handleLogging.user
})

const mapDispatchToProps=dispatch=>({
	changeRoute: (route)=>dispatch(changeRoute(route)),
	setLoggedIn: () => dispatch(setLoggedIn()),
	// handleSignupLoginButton: (bool) => dispatch(handleSignupLoginButton(bool)),
	// loadUser : (user) => dispatch(loadUser(user))
})

class App extends React.Component {
	constructor(){
		super();
	}

	render() {
		console.log(this.props)
		return (
			<div id={this.props.route==="signup"?"app-container-signup":this.props.route==="login"?"app-container-login":"app-container"}>
			{(this.props.isLog === false)?
				<Aux>
					<Vector/>
					<Logo/>
					{(this.props.route==='login')?
					<Login changeRoute={(route)=>this.props.changeRoute(route)} 
					setLoggedIn={()=>this.props.setLoggedIn()}/>:
					(this.props.route==='signup')?
					<Signup changeRoute={(route)=>this.props.changeRoute(route)} 
					setLoggedIn={()=>this.props.setLoggedIn()}/>:
					<Intro changeRoute={(route)=>this.props.changeRoute(route)}/>}
				</Aux>:
				<Home/>
			}
			</div>
			)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
