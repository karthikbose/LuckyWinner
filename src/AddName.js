import React from 'react';
import ListNames from './ListNames';
import '../style.css';

export default class AddName extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {
			newName : ""
		};

		this.onChange = this.onChange.bind(this);
		this.onAdd = this.onAdd.bind(this);
	}

	onChange(e) {
		this.setState(
				{
					newName : e.target.value
				}
			);
	}

	onAdd() {
		this.props.onAdd(this.state.newName);
	}

	render() {
		let divClass = 'hideDiv';
		if (this.props.visible) {
			divClass = 'showDiv';
		}
		return (
			<div className={divClass} >
				<input type="text" value={this.state.newName} onChange={this.onChange} />
				<button onClick={this.onAdd}>+Add</button>
				<button onClick={this.props.showMenu}>showMenu</button>
				<ListNames nameList={this.props.nameList} />
			</div>
		);
	}
}