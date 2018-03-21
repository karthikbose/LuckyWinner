import React from 'react';
import '../style.css';

export default class Menu extends React.Component
{
	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick(e) {
		this.props.onClick(e.target.id);
	}

	render() {
		let divClass = 'hideDiv';
		if (this.props.visible) {
			divClass = 'showDiv';
		}
		const rectDiv = "rectDiv";

		return (
			<div className={divClass} >
				<div className={rectDiv} onClick={this.onClick} id="Choose">Choose Lucky Winner!!</div>
				<div className={rectDiv} onClick={this.onClick} id="Add">Add Name</div>
			</div>
			);
	}
}

