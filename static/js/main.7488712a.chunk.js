(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},36:function(e,t,a){e.exports=a(67)},64:function(e,t){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(34),l=a.n(s),i=a(3),r=a(4),c=a(6),h=a(5),u=a(7),m=(a(13),a(20)),d=a.n(m),p=d()("https://worldwhiteboard.herokuapp.com");function b(e,t,a,n){p.emit("newNote",e,t,a,n,"1")}var f=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e={opacity:this.props.opacity,left:this.props.left+"%",top:this.props.top+"%"};return o.a.createElement("div",{className:"noteBubble",style:e},o.a.createElement("div",{className:"noteNote"},this.props.note),o.a.createElement("div",{className:"noteAuthor"},"-",this.props.author))}}]),t}(n.Component),E=a(35),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={note:"",author:"",modalFocus:""},a.handleWrite=function(){a.state.note&&(a.state.author?b(a.state.note,a.state.author,a.props.x,a.props.y):b(a.state.note,"Unknown",a.props.x,a.props.y),a.handleClose())},a.handleFocus=function(e){a.setState({modalFocus:e})},a.handleChange=function(e,t){a.setState(Object(E.a)({},t,e.target.value))},a.handleClose=function(){a.setState({note:""}),a.props.handleClose()},a.handleEmoji=function(e){var t;switch(console.log(e),e){case 0:t="\ud83d\ude02";break;case 1:t="\ud83d\ude0e";break;case 2:t="\ud83d\ude0d";break;case 3:t="\ud83d\udc4d\ud83c\udffb";break;case 4:t="\u2764\ufe0f";break;case 5:t="\ud83c\udf4f";break;case 6:t="\ud83d\ude80"}"note"===a.state.modalFocus?a.setState({note:a.state.note+t}):a.setState({author:a.state.author+t})},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props.show?"modal display-block":"modal display-none";return o.a.createElement("div",{className:t},o.a.createElement("header",{className:"modalMain"},o.a.createElement("textarea",{id:"NoteInput",placeholder:"Your Note",className:"noteArea",value:this.state.note,onFocus:function(){return e.handleFocus("note")},onChange:function(t){return e.handleChange(t,"note")}}),o.a.createElement("input",{id:"AuthorInput",placeholder:"Your Nickname",type:"text",className:"authorInput",value:this.state.author,onFocus:function(){return e.handleFocus("author")},onChange:function(t){return e.handleChange(t,"author")}}),o.a.createElement("div",{className:"emojiDiv"},o.a.createElement("span",{role:"img","aria-label":"Laugh",onClick:function(){return e.handleEmoji(0)},className:"modalButton"},"\ud83d\ude02"),o.a.createElement("span",{role:"img","aria-label":"SunGlasses",onClick:this.handleEmoji.bind(this,1),className:"modalButton"},"\ud83d\ude0e"),o.a.createElement("span",{role:"img","aria-label":"Heart Eyes",onClick:this.handleEmoji.bind(this,2),className:"modalButton"},"\ud83d\ude0d"),o.a.createElement("span",{role:"img","aria-label":"Thumb Up",onClick:this.handleEmoji.bind(this,3),className:"modalButton"},"\ud83d\udc4d\ud83c\udffb"),o.a.createElement("span",{role:"img","aria-label":"Read Heart",onClick:this.handleEmoji.bind(this,4),className:"modalButton"},"\u2764\ufe0f"),o.a.createElement("span",{role:"img","aria-label":"Green Apple",onClick:this.handleEmoji.bind(this,5),className:"modalButton"},"\ud83c\udf4f"),o.a.createElement("span",{role:"img","aria-label":"Rocket",onClick:this.handleEmoji.bind(this,6),className:"modalButton"},"\ud83d\ude80")),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.handleClose,className:"modalButton btn red"},"Cancel"),o.a.createElement("button",{onClick:this.handleWrite,className:"modalButton btn green"},"Write It"))))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={notes:[],show:!1},a.showModal=function(e,t){a.setState({show:!0,x:e,y:t})},a.hideModal=function(){a.setState({show:!1})},a.handleClick=function(e){a.showModal(e.pageX/window.innerWidth*100,e.pageY/window.innerHeight*100)},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e,t,a=this;e=function(e,t){return a.setState({notes:a.state.notes.concat(t)})},t=function(e){return a.setState({notes:e})},p.on("newNote",function(t){return e(null,t)}),p.on("resetNotes",function(e){return t(e)}),p.emit("getNotes")}},{key:"getList",value:function(){for(var e=[],t=0;t<this.state.notes.length;t++)e.push(o.a.createElement(f,{key:"Note"+t,note:this.state.notes[t].note,author:this.state.notes[t].author,left:this.state.notes[t].left,top:this.state.notes[t].top,opacity:this.state.notes[t].opacity}));return e}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(k,{show:this.state.show,handleClose:this.hideModal,x:this.state.x,y:this.state.y}),o.a.createElement("div",{className:"App",onClick:this.handleClick},o.a.createElement("p",{className:"PageTitle"},"The World's WhiteBoard"),o.a.createElement("p",{className:"PageSubTitle"},"Tap to leave a message"),o.a.createElement("header",{className:"App-header"},this.getList())))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,2,1]]]);
//# sourceMappingURL=main.7488712a.chunk.js.map