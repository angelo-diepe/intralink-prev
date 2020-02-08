import React from 'react';
import next from './assets/next.png';
import './Signup.css'

class  Signup extends React.Component {
	constructor(props){
		super(props);
		this.state={
			nextPage:false
		}
	}
	dir=()=>{
		this.setState({nextPage:!this.state.nextPage})
	}
	render(){
		return(
			<div id="form-signup-wrapper" className="animated bounceInRight delay-1s">
			{(this.state.nextPage)?
					<div id="form-signup-2">
						<header className="header-signup">
							<h1 id="title">Sign Up</h1>
							<h3 id="sub-title">Academics Informations</h3>
						</header>
					<section className="section-signup-2">
					<div id="plateform-input">
						<label forhtml="name">Plateforme
							<input type="text" id="name"   placeholder="PFTIN" name="name" className="input-signup"/>
						</label>
					</div>
					<div id="filiere-input">
						<label forhtml="filiere">Filiere
							<input type="text" placeholder="GRT" id="filiere" name="filiere" className="input-signup"/>
						</label>
					</div>
					<div id="level-input">
						<label forhtml="niveau">Niveau
							<input type="text" placeholder="1" id="niveau" name="niveau" className="input-signup"/>
						</label>
					</div>
					<div id="formation-input">
						<label forhtml="formation">Formation
							<input type="text" placeholder="FI1" id="formation" name="formation" className="input-signup"/>
						</label>
					</div>
					<div id="direction-signup-page">
						<button id="signup-button" onClick={()=>{if(this.props.setLoggedIn()){this.props.changeRoute('home')}}}>Signup</button>
						<button id="prev-signup"><img src={next} alt="icon to go to prev signup page" onClick={()=>this.dir()}/></button>
					</div>
					</section>
					<footer className="footer-signup">
						<div>Already a member? <a onClick={()=>this.props.changeRoute('login')}>Login</a></div>
					</footer>
					</div>
					:
					<div id="form-signup">
            <header className="header-signup">
              <h1 id="title">Sign Up</h1>
              <h3 id="sub-title">Personal Informations</h3>
            </header>
          <section className="section-signup">
          <div id="firstname-input">
            <label forhtml="name">FirstName
              <input type="text" id="name"   name="name" className="input-signup"/>
            </label>
          </div>
          <div id="secondname-input">
            <label forhtml="secondname">LastName
              <input type="text" id="secondname" name="secondname" className="input-signup"/>
            </label>
          </div>
          <div id="username-input">
            <label forhtml="username">Username
              <input type="text" id="username" name="username" className="input-signup"/>
            </label>
          </div>
          <div id="email-input">
            <label forhtml="email">Email
              <input type="text" id="email" name="email" className="input-signup"/>
            </label>
          </div>
          <div id="password-input">
            <label forhtml="password">Password
              <input type="password" id="password" name="password" className="input-signup"/>
            </label>
          </div>
          <div id="com-password-input">
            <label forhtml="com-password">Confirm Password
              <input type="password" id="com-password" name="com-password" className="input-signup"/>
            </label>
          </div>
          <div id="gender-input">
            <span forhtml="gender">Gender</span>
            <div id="gender-container">
              <label className="container">Male
                <input type="radio" checked="checked" name="radio"/>
                <span className="checkmark"></span>
              </label>
              <label className="container">Female
                <input type="radio" name="radio"/>
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <div id="number-input">
            <label forhtml="number">Number
              <input type="text" id="number"  name="number" className="input-signup"/>
            </label>
          </div>
          <button id="next-signup"><img src={next} alt="icon to go to next signup page" onClick={()=>this.dir()} /></button>
          </section>
          <footer className="footer-signup">
            <div>Already a member? <a onClick={()=>this.props.changeRoute('login')}>Login</a></div>
          </footer>
          </div>
        }
					</div>
			)
	}   
}
export default Signup;