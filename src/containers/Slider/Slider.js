import React from 'react';
import Slide from '../../components/Slide/Slide.js'
import Arrow from '../../components/Arrow/Arrow.js'
import "./Slider.css"

export default class Slider extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			images:new Array(5).fill({view:10,author:"Angelo",publish:new Date().toLocaleDateString()}),
			count:0,
		}
	}
	goToPrev=()=>{
		const images = this.state.images;
		const count = this.state.count;
		const slideWrapper = document.querySelector('#slide-wrapper');
		clearInterval(this.autoplay)
		if(count === 0){
			this.setState({count:images.length-1},()=>slideWrapper.style.transform = `translateX(-${this.state.count}00%)`)
		}else{
			this.setState({count:count-1},()=>slideWrapper.style.transform = `translateX(-${this.state.count}00%)`)
		}
		this.autoplay=setInterval(this.goToNext,4000);
	}
	goToNext=()=>{
		const images = this.state.images;
		const count = this.state.count;
		const slideWrapper = document.querySelector('#slide-wrapper');
		clearInterval(this.autoplay)
		if(count === images.length-1){
			this.setState({count:0},()=>slideWrapper.style.transform = `translateX(0%)`)
		}else{
			this.setState({count:count+1},()=>slideWrapper.style.transform = `translateX(-${this.state.count}00%)`)
		}
		this.autoplay=setInterval(this.goToNext,4000);
	}
	componentDidMount(){
		this.autoplay=setInterval(this.goToNext,4000);
	}
	componentWillUnmount(){
		clearInterval(this.autoplay)
	}
	render() {
		return (
			<div id="slider-container">
					<Arrow dir="left" move={this.goToPrev}/>
					<div id="slide-wrapper">
						{this.state.images.map((image,i)=><Slide img={`https://source.unsplash.com/random/?computer,${i},web`} view={image.view} author={image.author} publish={image.publish} key={i}/>)}
					</div>
					<div id="shadow-wrapper"></div>
					<Arrow dir="right" move={this.goToNext} />
			</div>
		);
	}
}
