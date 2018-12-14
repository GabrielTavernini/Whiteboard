import React, { Component } from 'react';
import './App.css';

class Note extends Component {
	render() {
		const opacityStyle = {
			opacity: this.props.opacity,
			left: this.props.left + '%',
			top: this.props.top + '%'
		};

		return (
		<div className="noteBubble" style={opacityStyle}>
			<div className="noteNote">{this.props.note}</div>
			<div className="noteAuthor">-{this.props.author}</div>
		</div>
		);
	}
}

export default Note;