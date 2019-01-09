import React, { Component } from 'react';
import './App.css';
import { subscribeToNewNotes, getNotes } from './api.js';
import Note from './note.js'
import Modal from './modal.js'

class App extends Component {
	state = {
		notes: [],
		show: false
	};

	componentDidMount() {
		subscribeToNewNotes((err, note) => this.setState({ 
			notes: this.state.notes.concat(note)
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
				key={'Note' + i}
				note={this.state.notes[i].note} 
				author={this.state.notes[i].author} 
				left={this.state.notes[i].left}
				top={this.state.notes[i].top}
				opacity={this.state.notes[i].opacity}/>)
				//console.log(this.state.lefts[i] + " : " + this.state.tops[i] + " : " + this.state.opacity[i]);
		} 
		return list;
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
	};

	handleClick = (e) => {
		if(e.target.tagName != "A")
			this.showModal(e.pageX / window.innerWidth * 100, e.pageY / window.innerHeight * 100)
	}

  render() {
    return (
		<div>
			<Modal 
				show={this.state.show} 
				handleClose={this.hideModal}
				x={this.state.x}
				y={this.state.y} />

			<div className="App" onClick={this.handleClick}>
				<p className="PageTitle">The World's WhiteBoard</p>
				<p className="PageSubTitle">Tap to leave a message<br/>
											It will disappear in a few minutes<br/>
											Click <a href="https://github.com/GabrielTavernini/Whiteboard">here</a> for the code</p>
				<header className="App-header">
					{this.getList()}
				</header>
			</div>
		</div>

		
    );
  }
}

export default App;