
var letters = [];
var socket;
var key=false;
var kibutton;
var kie;
var dobutton;
var doe;
var aibutton;
var aie;
var rakubutton;
var rakue;


let chat=[] ; 
let ki=[0,1,2];
let doo=[3,4,5];
let ai=[6,7,8];
let raku=[9,10,11];


function preload(){
  chat[0] = loadImage('ki1.png');
  chat[1] = loadImage('ki2.png');
  chat[2] = loadImage('ki3.png');
  chat[3] = loadImage('do1.png');
  chat[4] = loadImage('do2.png');
  chat[5] = loadImage('do3.png');
  chat[6] = loadImage('ai1.png');
  chat[7] = loadImage('ai2.png');
  chat[8] = loadImage('ai3.png');
  chat[9] = loadImage('raku1.png');
  chat[10] = loadImage('raku2.png');
  chat[11] = loadImage('raku3.png');
  chat[12] = loadImage('siro.png');
}



function setup() {
  frameRate(30);
  createCanvas(windowWidth,windowHeight );  
  
  //喜ボタン
  kibutton=createImg('ki.png');
  kibutton.position(0,windowHeight-windowWidth/4);
  kibutton.size(windowWidth/4,windowWidth/4);
  kibutton.mousePressed(kimode);
  
  //怒ボタン
  dobutton=createImg('do.png');
  dobutton.position(windowWidth/4,windowHeight-windowWidth/4);
  dobutton.size(windowWidth/4,windowWidth/4);
  dobutton.mousePressed(domode);
  
  //哀ボタン
  aibutton=createImg('ai.png');
  aibutton.position(windowWidth/2,windowHeight-windowWidth/4);
  aibutton.size(windowWidth/4,windowWidth/4);
  aibutton.mousePressed(aimode);
  
  //楽ボタン
  rakubutton=createImg('raku.png');
  rakubutton.position(3*windowWidth/4,windowHeight-windowWidth/4);
  rakubutton.size(windowWidth/4,windowWidth/4);
  rakubutton.mousePressed(rakumode);
  
  socket = io();
  //socket = io('http://192.168.1.6:3000');
  
  background(255);
  
  a=12;
  b=12;
  c=12;
  d=12;
}

function draw() {
  background(255);
  
  image(chat[d],windowWidth/2,0,windowWidth/2,windowWidth/4);
  image(chat[c],windowWidth/2,windowWidth/4,windowWidth/2,windowWidth/4);
  image(chat[b],windowWidth/2,windowWidth/2,windowWidth/2,windowWidth/4); 
  image(chat[a],windowWidth/2,3*windowWidth/4,windowWidth/2,windowWidth/4); 
  
  
  
}


function sendpurasu() {
  var paper=1;  
  console.log('Sending:'+paper);  
  var date = {
     paper:paper
  }
  socket.emit('send',date);    
}

function sendmainasu() {
  var paper=-1;  
  console.log('Sending:'+paper);  
  var date = {
     paper:paper
  }
  socket.emit('send',date);    
}

  

function kimode(){
  d=c;
  c=b;
  b=a;
  a=random(ki);
  sendpurasu();
}
function domode(){
  d=c;
  c=b;
  b=a;
  a=random(doo);
  sendmainasu();
}
function aimode(){
  d=c;
  c=b;
  b=a;
  a=random(ai);
  sendmainasu();
}
function rakumode(){
  d=c;
  c=b;
  b=a;
  a=random(raku)
  sendpurasu();
}