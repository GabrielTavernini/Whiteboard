import React, { Component } from 'react';
import './App.css';

class Modal extends Component {
	render() {
		const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

		return (
			<div className={showHideClassName}>
				<header className="modalMain">
					<textarea 
					id="NoteInput" 
					placeholder="Your Note" 
					className="noteArea" 
					value={this.props.note} 
					onFocus={() => this.props.handleFocus('note')} 
					onChange={e => this.props.handleChange(e, 'note')}/>
					
					<input 
						id="AuthorInput" 
						placeholder="Your Nickname" 
						type="text" 
						className="authorInput" 
						value={this.props.author} 
						onFocus={() => this.props.handleFocus('author')} 
						onChange={e => this.props.handleChange(e, 'author')}/>

					<div className="emojiDiv">
						<span role="img" aria-label="Laugh" onClick={this.props.handleEmoji.bind(null, 0)} className="modalButton">😂</span>
						<span role="img" aria-label="SunGlasses" onClick={this.props.handleEmoji.bind(null, 1)} className="modalButton">😎</span>
						<span role="img" aria-label="Heart Eyes" onClick={this.props.handleEmoji.bind(null, 2)} className="modalButton">😍</span>
						<span role="img" aria-label="Thumb Up" onClick={this.props.handleEmoji.bind(null, 3)} className="modalButton">👍🏻</span>
						<span role="img" aria-label="Read Heart" onClick={this.props.handleEmoji.bind(null, 4)} className="modalButton">❤️</span>
						<span role="img" aria-label="Green Apple" onClick={this.props.handleEmoji.bind(null, 5)} className="modalButton">🍏</span>
						<span role="img" aria-label="Rocket" onClick={this.props.handleEmoji.bind(null, 6)} className="modalButton">🚀</span>
					</div>
					<div>
						<button onClick={this.props.handleClose} className="modalButton btn red">Cancel</button>
						<button onClick={this.props.handleWrite} className="modalButton btn green">Write It</button>
					</div>
					
				</header>
			</div>
		);
	}
}

export default Modal;