import React from 'react'

export default class Comment extends React.Component {

	render() {
		return (
			<li className="chat__item" key={this.props.id}>
				<p className="chat__text">{this.props.text}</p>
			</li>
		)
	}
}