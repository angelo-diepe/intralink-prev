import React from 'react';
import {connect} from "react-redux";
import Nav from '../../components/Nav/Nav.js';
import Actu from '../../containers/Actu/Actu.js';
import Discussion from '../../containers/Discussion/Discussion.js';
import Setting from '../../components/Setting/Setting.js';
import About from '../../components/About/About.js';
import Help from '../../components/Help/Help.js';
import footerLogo from "./assets/logo.png"
import "./Home.css";
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
class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="home-container">
				<Nav changeRoute={this.props.changeRoute} setLoggedIn={this.props.setLoggedIn}/>
				{(this.props.route==="home")?
				<Actu/>
				:(this.props.route==="discussion")?
				<Discussion/>
				:(this.props.route==="setting")?
				<Setting/>
				:(this.props.route==="help")?
				<Help/>
				:(this.props.route==="about")?
				<About/>
				:null
			}
			<footer id="home-footer"><img src={footerLogo} alt="logo" height="40px" width="40px"/><span>INTRALINK &copy; All Right Reserved. 2019</span></footer>
			</div>
		);
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);