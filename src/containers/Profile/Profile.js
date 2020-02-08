import React from 'react';
import bg from './assets/bg.png';
import profile from "./assets/profile.jpg"
import {connect} from "react-redux";
import './Profile.css';
import {changeRoute,setLoggedIn} from "../Redux/actions.js"

const mapStateToProps=state=>({
	route:state.handleRoute.route,
	isLog:state.handleLogging.isLog,
	// user:state.handleLogging.user
})

const mapDispatchToProps=dispatch=>({
	changeRoute: (route)=>dispatch(changeRoute(route)),
	setLoggedIn: () => dispatch(setLoggedIn()),
})
class Profile extends React.Component {
	render() {
		return (
			<div id="profile-wrapper" className="animated slideInRight delay-1s">
				<div id="profile-container">
					<header id="profile-header" style={{backgroundImage:`url(${bg})`}}>
						<div id="profile-img" style={{backgroundImage:`url(${profile})`}}>
						</div>
					</header>
					<div id="profile-info-container">
						<div className="info-profile">
							<span className="profile-tag">UserName :</span>
							<div className="input-profile">Angelo</div>
						</div>
						<div className="info-profile">
							<span className="profile-tag">FirstName :</span>
							<div className="input-profile">Ange Odilon</div>
						</div>
						<div className="info-profile">
							<span className="profile-tag">LastName :</span>
							<div className="input-profile">Noubissie Diepe</div>
						</div>
						<div className="info-profile">
							<span className="profile-tag">Email :</span>
							<div className="input-profile">angelodiepe10@yahoo.com</div>
						</div>
							<div className="info-profile">
							<span className="profile-tag">Number :</span>
							<div className="input-profile">695151114</div>
						</div>
						<div className="info-profile">
							<span className="profile-tag">Gender :</span>
							<div className="input-profile">Male</div>
						</div>
						<div className="info-profile">
							<span className="profile-tag">Age :</span>
							<div className="input-profile">20</div>
						</div>
						<div className="info-profile">
							<span className="profile-tag">PlateForm :</span>
							<div className="input-profile">PFTIN</div>
						</div>
						<div className="info-profile">
							<span className="profile-tag">Option :</span>
							<div className="input-profile">GRT</div>
						</div>
						<div className="info-profile">
							<span className="profile-tag">Level :</span>
							<div className="input-profile">2</div>
						</div>
						<div className="info-profile">
							<span className="profile-tag">Initial Formation :</span>
							<div className="input-profile">FI1</div>
						</div>
						<div className="modify-profile"><button id="modify-button" onClick={()=>null}>Modify</button></div>
					</div>	
				</div>
			</div>
		)
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Profile);