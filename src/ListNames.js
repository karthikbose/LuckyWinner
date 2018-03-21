import React from 'react';

export default class ListNames extends React.Component
{
	constructor(props) {
		super(props);
	}

	render() {

		const listNames = this.props.nameList.map(
			name => <li key={name}>{name}</li>
		);

		return (
			<ul>{listNames}</ul>
		);
	}
}