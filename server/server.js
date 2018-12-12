const io = require('socket.io')();
const fs = require('fs');
let data = fs.readFileSync('./notes.json');
let notes = JSON.parse(data);

const port = 8000;
io.listen(port);
console.log('listening on port ', port);


io.on('connection', (client) => {
	client.on('newNote', (note, author, left, top, opacity) => {
		//console.log('New note from client ' + note);
		//client.emit('newNote', title);
		
		let newNote = new Note(note, author, left, top, opacity);
		notes.push(newNote);
		let newData = JSON.stringify(notes);
		fs.writeFile('./notes.json', newData, err => console.log(err));

		io.sockets.emit('newNote', newNote);
		//io.sockets.emit('newNote', note, author, getRandomInt(1000).toString(), getRandomInt(1000).toString(),  Math.random().toString());

		// setInterval(() => {
		// 	console.log(getRandomInt(1000));
		// 	client.emit('newNote', note + new Date().getSeconds(), author, getRandomInt(1000).toString(), getRandomInt(1000).toString(), Math.random().toString());
		// }, 1000);
	});

	client.on('getNotes', () => {
		client.emit('resetNotes', notes);
	});
});

setInterval(() => {
	for(let i = 0; i < notes.length; i++){
		notes[i].opacity -= 0.025;
		if(notes[i].opacity <= 0.0){
			notes.splice(i, 1);
			i--;
		}
	}

	io.sockets.emit('resetNotes', notes);
	let newData = JSON.stringify(notes);
	fs.writeFile('./notes.json', newData, err => { if(err) console.log(err);});
}, 20000);

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}


class Note{
	constructor(note, author, left, top, opacity){
		this.note = note;
		this.author = author;
		this.left = left;
		this.top = top;
		this.opacity = opacity;
	}
}