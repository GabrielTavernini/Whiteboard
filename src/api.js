import io from 'socket.io-client';
const  socket = io('http://192.168.0.106:8000');

function subscribeToTimer(cb, reset) {
  //socket.on('timer', timestamp => cb(null, timestamp));
  //socket.emit('subscribeToTimer', 10000);
  socket.on('newNote', (note) => cb(null, note));
  socket.on('resetNotes', (notesArr) => reset(notesArr));
  //socket.emit('newNote', 'Fucking long note jks jfkafkafhjj sasads ssss  sss sss ss s hjhj', 'Author', '100', '20', '0.7');
}

function sendNote(note, author, x, y){
	socket.emit('newNote', note, author, x, y, '1');
}

function getNotes(){
	socket.emit('getNotes');
}

export { subscribeToTimer, sendNote, getNotes };