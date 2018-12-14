import io from 'socket.io-client';
const  socket = io('http://192.168.0.106:8000')//'https://worldwhiteboard.herokuapp.com');

function subscribeToNewNotes(cb, reset) {
  socket.on('newNote', (note) => cb(null, note));
  socket.on('resetNotes', (notesArr) => reset(notesArr));
}

function sendNote(note, author, x, y){
	socket.emit('newNote', note, author, x, y, '1');
}

function getNotes(){
	socket.emit('getNotes');
}

export { subscribeToNewNotes, sendNote, getNotes };