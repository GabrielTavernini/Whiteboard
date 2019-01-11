import io from 'socket.io-client';
let debugging = false;
let prevMsg = "";
const  socket = debugging ? io('http://localhost:8000') : io('https://worldwhiteboard.herokuapp.com')//'https://worldwhiteboard.herokuapp.com');

function subscribeToNewNotes(cb, reset) {
  socket.on('newNote', (note) => cb(null, note));
  socket.on('resetNotes', (notesArr) => reset(notesArr));
}

function sendNote(note, author, x, y){
	if(note != prevMsg) {
		socket.emit('newNote', note, author, x, y, '1');
		prevMsg = note;
	}
}

function getNotes(){
	socket.emit('getNotes');
}

export { subscribeToNewNotes, sendNote, getNotes };