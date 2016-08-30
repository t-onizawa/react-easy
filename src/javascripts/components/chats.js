import React from 'react'
import Comment from './chats/comment'

export default class Chats extends React.Component {

	render() {
		let chats = this.props.chats.map((chat) => {
			return <Comment id={chat.id} key={chat.id} type={chat.type} text={chat.text}/>
		});

		return (
			<div className="chat">
				<ul className="chat__list">
					{chats}
				</ul>
			</div>
		)
	}
}