var express=require('express');

var app =express();

var server = app.listen(process.env.PORT || 3000);
//var server = app.listen(3000);
var date;

app.use(express.static('public'));


console.log("My socket server is run")

var socket = require('socket.io');

var io = socket(server);

io.on('connection',newConnection);

function newConnection(socket){

console.log( ' new connection: ' + socket.id );

socket.on('send',stages);

function stages(date){
socket.broadcast.emit('catch',date);
 console.log(date);

}

}