import React, { Component } from 'react';
import './calculate.scss';
import Calc from './Calc';
import History from './History';

class App extends Component {

	render() {
		return (
			<div className="App">
				<div className="Container">
					<Calc />
					<History />
				</div>
			</div>
		);
	}
}

export default App;
