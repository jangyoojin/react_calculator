import React, { Component } from 'react';
import './calculate.scss';
import Calc from './Calc';
import History from './History';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			history:[]
		};
	}
	render() {
		return (
			<div className="App">
				<div className="Container">
					<Calc onChangePage={function(equa){
						this.setState({
							history: this.props.history.concat(equa)
						})
					}.bind(this)}/>
					<History history={this.state.history} />
				</div>
			</div>
		);
	}
}

export default App;
