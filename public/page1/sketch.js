var happa=[];
var socket;
var key=false;
var i=255;
var wallstate=0;
var wallcount=1;

function preload(){
  happa[1]=loadImage('aset2a.png');
  happa[2]=loadImage('aset3a.png');
  happa[3]=loadImage('aset4a.png');
  happa[4]=loadImage('aset5a.png');
  happa[5]=loadImage('aset6a.png');
  happa[6]=loadImage('aset7a.png');
  happa[7]=loadImage('aset8a.png');
  happa[8]=loadImage('aset9a.png');
  happa[9]=loadImage('aset10a.png');
  happa[10]=loadImage('aset10c.png');
  happa[-1]=loadImage('aset2b.png');
  happa[-2]=loadImage('aset3b.png');
  happa[-3]=loadImage('aset4b.png');
  happa[-4]=loadImage('aset5b.png');
  happa[-5]=loadImage('aset6b.png');
  happa[-6]=loadImage('aset7b.png');
  happa[-7]=loadImage('aset8b.png');
  happa[-8]=loadImage('aset9b.png');
  happa[-9]=loadImage('aset10b.png');
}

function mousePressed() {
  let fs = fullscreen();
  fullscreen(!fs);
}


function setup() {
  socket = io();
  socket.on('catch',newdrawing);

}

function newdrawing(date){
console.log(date);
key=true;
  

if(key==true){
  if(date.paper>0&&wallcount>0){
    wallcount=wallcount+date.paper;
  }else if(date.paper<0&&wallcount>0){
    wallcount=wallcount*date.paper;
  }

i=200;
key=false;
  }
}


function draw() {
  createCanvas(windowWidth,windowHeight);
  background(i);
  translate(windowWidth/2,windowHeight);
  
  while(i<255){
    i+=0.1;
  }
  
  
  if(wallcount==1||wallcount==-1){
    image(happa[wallcount],-windowWidth/8,-windowHeight/6,windowWidth/4,windowHeight/6);
  }else if(wallcount==2||wallcount==-2){
    image(happa[wallcount],-windowWidth*1.3/8,-windowHeight*1.6/6,windowWidth*1.3/4,windowHeight*1.6/6);
  }else if(wallcount==3||wallcount==-3){
    image(happa[wallcount],-windowWidth*1.6/8,-windowHeight*2.2/6,windowWidth*1.6/4,windowHeight*2.2/6);
  }else if(wallcount==4||wallcount==-4){
    image(happa[wallcount],-windowWidth*1.9/8,-windowHeight*2.8/6,windowWidth*1.9/4,windowHeight*2.8/6);
  }else if(wallcount==5||wallcount==-5){
    image(happa[wallcount],-windowWidth*2.2/8,-windowHeight*3.4/6,windowWidth*2.2/4,windowHeight*3.4/6);
  }else if(wallcount==6||wallcount==-6){
    image(happa[wallcount],-windowWidth*2.5/8,-windowHeight*4/6,windowWidth*2.5/4,windowHeight*4/6);
  }else if(wallcount==7||wallcount==-7){
    image(happa[wallcount],-windowWidth*2.8/8,-windowHeight*4.6/6,windowWidth*2.8/4,windowHeight*4.6/6);
  }else if(wallcount==8||wallcount==-8){
    image(happa[wallcount],-windowWidth*3.1/8,-windowHeight*5.2/6,windowWidth*3.1/4,windowHeight*5.2/6);
  }else if(wallcount==9||wallcount==-9){
    image(happa[wallcount],-windowWidth/2,-windowHeight,windowWidth,windowHeight);
  }else if(wallcount=>10){
    image(happa[10],-windowWidth/2,-windowHeight,windowWidth,windowHeight);
  }
  
  if(wallcount>=10||wallcount<0){
    wallstate=wallcount;
    setTimeout(function(){
      wallcount=1;
    },2000)
  }
}
