import React, { Component } from 'react';

class History extends Component {

	render() {
		var i = 0;
		var hlist = [];
		var data = this.props.history;
		while(i < data.length) {
			hlist.push(
				<tr>
					<td>{data[i]}</td>
				</tr>
			);
			i = i + 1;
		}
		return (
			<div className="history">
				<div className="history__title">History</div>
				<table className="history__table">
					{hlist}
				</table>
			</div>
		);
	}
}

export default History;
