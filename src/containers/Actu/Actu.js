import React from 'react';
import Slider from '../Slider/Slider.js';
import ActuCard from '../../components/ActuCard/ActuCard.js'
import ActuList from '../../components/ActuList/ActuList.js'
import Article from '../../components/Article/Article.js'
import Aux from '../HOC/HOC.js'
import "./Actu.css";
import {connect} from 'react-redux';
import {selectArticle} from "../Redux/actions.js"

const mapStateToProps=state=>({
	onArticle:state.handleRoute.onArticle,
})

const mapDispatchToProps=dispatch=>({
	selectArticle: (id)=>dispatch(selectArticle(id)),
})
class Actu extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="actu-container" className="animated slideInRight delay-1s">
				{(this.props.onArticle.status)?
					<Article header={null} body={null}/>
					:
					<Aux>
						<Slider/>
						<ActuList>
							{Array(11).fill(1).map((el,i)=><ActuCard key={i} select={this.props.selectArticle}/>)}
						</ActuList>
					</Aux>
				}
			</div>
		);
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Actu);