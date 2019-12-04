import React from 'react';
import './Setting.css'
export default function Setting() {
	const selectLang = e =>{
		e.target.classList.add('selected-lang');
		Array.from(document.querySelectorAll(".selected-lang")).forEach(el=>{if(el.innerHTML!==e.target.innerHTML)el.classList.remove('selected-lang')})
	}
	return (
			<div id="setting-container">
				<h3 id="setting-title">SETTING</h3>
				<div id="font-slider">
					<span id="font-param">Font</span>
					<div className="slide-container">
						<div id="size-wrapper">
							<span className="size">10px</span>
							<span className="size">16px</span>
							<span className="size">22px</span>
						</div>
  					<input type="range" min="10" max="22" step="6" className="slider" id="myRange" onInput={(e)=>console.log(e.target.value)}/>
					</div>
				</div>
				<div id="lang-wrapper">
					<span id="lang-param">Language</span>
					<div id="lang-container">
						<span className="lang selected-lang" onClick={(e)=>selectLang(e)}>English</span>
						<span className="lang" onClick={(e)=>selectLang(e)}>Francais</span>
					</div>
				</div>
			</div>
	)
}