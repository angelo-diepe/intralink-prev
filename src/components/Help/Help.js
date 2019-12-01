import React from 'react';
import video from "./assets/video.mp4";
import './Help.css'
export default function Help() {
	return (
			<div id="help-container" className="animated slideInRight delay-1s">
				<h3 id="help-title">HELP TUTORIAL</h3>
				<video id="video-help" src={video} autoplay={true} controls={true} type="video/mp4" ></video>
			</div>
	)
}