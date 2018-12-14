import React, { Component } from 'react';
import { sendNote } from './api.js';
import './App.css';

class Modal extends Component {
	state = {
		note: '',
		author: '',
		modalFocus: ''
	};

	handleWrite = () => {
		if(this.state.note){
			if(this.state.author)
				sendNote(this.state.note, this.state.author, this.props.x, this.props.y);
			else
				sendNote(this.state.note, 'Unknown', this.props.x, this.props.y);
			
			this.handleClose()
		}
	}

	handleFocus = (valueName) => {
		this.setState({
			modalFocus: valueName
		});
	}

	handleChange = (event, valueName) => {
		this.setState({
			[valueName]: event.target.value
		});
	}

	handleClose = () => {
		this.setState({note: ''});
		this.props.handleClose();
	}

	handleEmoji = (i) => {
		let em;
		console.log(i);
		switch(i){
			case 0:
				em = '😂';
				break;
			case 1:
				em = '😎';
				break;
			case 2:
				em = '😍';
				break;
			case 3:
				em = '👍🏻';
				break;
			case 4:
				em = '❤️';
				break;
			case 5:
				em = '🍏';
				break;
			case 6:
				em = '🚀';
				break;
			default:
				break;
		}

		if(this.state.modalFocus === 'note')
			this.setState({
				note: this.state.note + em
			});
		else
			this.setState({
				author: this.state.author + em
			});
	}


	render() {
		const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

		return (
			<div className={showHideClassName}>
				<header className="modalMain">
					<textarea 
					id="NoteInput" 
					placeholder="Your Note" 
					className="noteArea" 
					value={this.state.note} 
					onFocus={() => this.handleFocus('note')} 
					onChange={e => this.handleChange(e, 'note')}/>
					
					<input 
						id="AuthorInput" 
						placeholder="Your Nickname" 
						type="text" 
						className="authorInput" 
						value={this.state.author} 
						onFocus={() => this.handleFocus('author')} 
						onChange={e => this.handleChange(e, 'author')}/>

					<div className="emojiDiv">
						<span role="img" aria-label="Laugh" onClick={() => this.handleEmoji(0)} className="modalButton">😂</span>
						<span role="img" aria-label="SunGlasses" onClick={this.handleEmoji.bind(this, 1)} className="modalButton">😎</span>
						<span role="img" aria-label="Heart Eyes" onClick={this.handleEmoji.bind(this, 2)} className="modalButton">😍</span>
						<span role="img" aria-label="Thumb Up" onClick={this.handleEmoji.bind(this, 3)} className="modalButton">👍🏻</span>
						<span role="img" aria-label="Read Heart" onClick={this.handleEmoji.bind(this, 4)} className="modalButton">❤️</span>
						<span role="img" aria-label="Green Apple" onClick={this.handleEmoji.bind(this, 5)} className="modalButton">🍏</span>
						<span role="img" aria-label="Rocket" onClick={this.handleEmoji.bind(this, 6)} className="modalButton">🚀</span>
					</div>
					<div>
						<button onClick={this.handleClose} className="modalButton btn red">Cancel</button>
						<button onClick={this.handleWrite} className="modalButton btn green">Write It</button>
					</div>
					
				</header>
			</div>
		);
	}
}

export default Modal;