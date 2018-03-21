import React from 'react';
import '../style.css';

export default class Lot extends React.Component
{
	constructor(props) {
		super(props);

		this.getLuckyPerson = this.getLuckyPerson.bind(this);
		this.onChange = this.onChange.bind(this);

		this.state = {
			luckyPerson : this.getLuckyPerson()
		};

	}

	onChange(e) {
		this.setState(
				{
					luckyPerson : this.getLuckyPerson()
				}
			);
	}

	getLuckyPerson() {
		const randomIndex = Math.floor((Math.random() * 10)) % this.props.nameList.length;
		return this.props.nameList[randomIndex];
	}

	render() {
		let divClass = 'hideDiv';
		if (this.props.visible) {
			divClass = 'showDiv';
		}

		return (
			<div className={divClass} >
				<h1>{this.state.luckyPerson}</h1>
				<button onClick={this.onChange}>Try Now!!</button>
				<button onClick={this.props.showMenu}>showMenu</button>		
			</div>
		);
	}
}