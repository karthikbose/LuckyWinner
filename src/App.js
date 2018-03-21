import React from 'react';
import AddName from './AddName';
import Menu from './Menu';
import Lot from './Lot';

export default class App extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {
			showMenu : true,
			showChoose : false,
			showAdd : false,
			nameList : ["karthik"]
		};

		this.onMenuClick = this.onMenuClick.bind(this);
		this.showMenu = this.showMenu.bind(this);
		this.onAddName = this.onAddName.bind(this);
	}

	onMenuClick(targetId) {
		let isChoose = false;
		if(targetId == "Choose") {
			isChoose = true;
		}

		this.setState({
			showMenu : false,
			showChoose : isChoose,
			showAdd : !isChoose
		});
	}

	showMenu()
	{
		this.setState({
			showMenu : true,
			showChoose : false,
			showAdd : false
		});
	}

	onAddName(newName) {
		this.setState((prevState, props) =>
				{
					return (
						{
							nameList : [...prevState.nameList, newName]
						}
					);
				}
			);		
	}

	render() {
		return (
			<div>
				<h1>Welcome!!</h1>
				<Menu visible = {this.state.showMenu} onClick={this.onMenuClick} />

				<AddName visible = {this.state.showAdd} nameList={this.state.nameList} onAdd={this.onAddName} showMenu={this.showMenu} />
				<Lot visible = {this.state.showChoose} nameList={this.state.nameList} showMenu={this.showMenu} />
			</div>
			);
	}
}

