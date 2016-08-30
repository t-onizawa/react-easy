import React from 'react'
import ReactDom from 'react-dom'
import Chats from './components/chats'

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			chats: [
				{
					id: '1',
					text: 'testtttwwweee'

				}
			]
		};
	}

	render() {
		return (
			<Chats
				chats={this.state.chats}
			/>
		)
	}
}

ReactDom.render(
	<App />,
	document.getElementById('app')
);