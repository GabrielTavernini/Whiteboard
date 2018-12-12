import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { subscribeToTimer, sendNote, getNotes } from './api.js';
import Note from './note.js'
import Modal from './modal.js'

class App extends Component {
	state = {
		//timestamp: 'no timestamp yet',
		//titles: [],
		note: '',
		author: '',
		modalFocus: '',
		notes: [],
		// authors: [],
		// lefts: [],
		// tops: [],
		// opacity: [],
		show: false
	};

	componentDidMount() {
		subscribeToTimer((err, note) => this.setState({ 
			//titles: this.state.titles.concat(title),
			notes: this.state.notes.concat(note)
			// authors: this.state.authors.concat(author),
			// lefts: this.state.lefts.concat(left),
			// tops: this.state.tops.concat(top),
			// opacity: this.state.opacity.concat(opacity),
			// show: false
		}), (notesArr) => this.setState({
			notes: notesArr
		}));

		getNotes((notesArr) => this.setState({
			notes: notesArr
		}));
	}

	getList() {
		let list = [];
		for (let i=0; i < this.state.notes.length; i++) {
			list.push(<Note 
				note={this.state.notes[i].note} 
				author={this.state.notes[i].author} 
				left={this.state.notes[i].left}
				top={this.state.notes[i].top}
				opacity={this.state.notes[i].opacity}/>)
				//console.log(this.state.lefts[i] + " : " + this.state.tops[i] + " : " + this.state.opacity[i]);
		} 
		return list;
	}

	handleWrite = () => {
		if(this.state.note && this.state.author){
			sendNote(this.state.note, this.state.author, this.state.x, this.state.y);
			this.hideModal();
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

	showModal = (x, y) => {
		this.setState({ 
			show: true, 
			x: x,
			y: y
		});
	};
	
	hideModal = () => {
		this.setState({ show: false });
		this.setState({
			note: '',
			author: ''
		});
	};

	handleClick = (e) => {
		this.showModal(e.pageX, e.pageY)
	}

  render() {
    return (
		<div>
			<Modal 
				show={this.state.show} 
				handleClose={this.hideModal} 
				handleWrite={this.handleWrite} 
				handleChange={this.handleChange} 
				note={this.state.note} 
				author={this.state.author} 
				handleEmoji={this.handleEmoji}
				handleFocus={this.handleFocus}/>

			<div className="App" onClick={this.handleClick}>
				<p className="PageTitle">The World's WhiteBoard</p>
				<header className="App-header">
					{this.getList()}
				</header>
			</div>
		</div>

		
    );
  }
}

export default App;