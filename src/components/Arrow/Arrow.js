import React from 'react';
import arrow from "./assets/arrow.png";
import "./Arrow.css"

const Arrow = ({dir,move}) => {
	return <img src={arrow} alt="arrow" className={(dir==="left")?"arrow-left":"arrow-right"} width="48px" onClick={()=>move()}/>
}

export default Arrow