import io from 'socket.io-client';
let debugging = false;
const  socket = debugging ? io('http://localhost:8000') : io('https://worldwhiteboard.herokuapp.com')//'https://worldwhiteboard.herokuapp.com');

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