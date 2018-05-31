var kasse

var bold

var boxlist = [];


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  kasse = {
  x1: 0,
  x2: 500,
  y1: 330,
  y2: 400,
  ox1: 0,
  oy1: 0
}

 bold = {
  x: 200,
  y: 200,
  sx: 0,
  sy: 0
}

 var boks = {
  x1: window.innerWidth/2,
  x2: window.innerWidth/2+100,
  y1: window.innerHeight/2,
  y2: window.innerHeight/2+10,
}

 var boks2 = {
  x1: window.innerWidth/3,
  x2: window.innerWidth/3 +100,
  y1: window.innerHeight/2.5,
  y2: window.innerHeight/2.5+ 10
}

 var boks3 = {
  x1: window.innerWidth/2,
  x2: window.innerWidth/2 + 100,
  y1: window.innerHeight/3.5,
  y2: window.innerHeight/3.5 + 10
}
 
 var boks4 = {
  x1: window.innerWidth/4.8,
  x2: window.innerWidth/4.8 + 100,
  y1: window.innerHeight/1.45,
  y2: window.innerHeight/1.45 + 10
}
 
 var boks5 = {
  x1: window.innerWidth/3,
  x2: window.innerWidth/3 + 100,
  y1: window.innerHeight/1.7,
  y2: window.innerHeight/1.7 + 10
}
 
 var boks6 = {
  x1: window.innerWidth/5,
  x2: window.innerWidth/5 + 100,
  y1: window.innerHeight/1.1,
  y2: window.innerHeight/1.1 + 10
}

var boks7 = {
  x1: window.innerWidth/13,
  x2: window.innerWidth/13 + 100,
  y1: window.innerHeight/1.25,
  y2: window.innerHeight/1.25 + 10
}

 var boks8 = {
  x1: window.innerWidth/1.5,
  x2: window.innerWidth/1.5+100,
  y1: window.innerHeight/6,
  y2: window.innerHeight/6+10,
  c: color(25, 204, 0)
}


 boxlist = [boks, boks2,boks3,boks4,boks5,boks6, boks7, boks8]
}
var t = 0;


function draw() {
  t++;
  background(220);

  rect(kasse.x1, kasse.y1, kasse.x2 - kasse.x1, kasse.y2 - kasse.y1)

  //draw ball
  ellipse(bold.x, bold.y, 50)
  //draw boks
  stroke(2, 47, 57);

  for (var i=0;i<boxlist.length;i++){
 		var b = boxlist[i];
    if(b.c!=null) {
    	fill(b.c)
     }
    else{
    fill(255)
    }
    rect(b.x1, b.y1, b.x2 - b.x1, b.y2 - b.y1)
  }
  update()
  calcGravety();
  checkKeys();

}

function calcGravety() {
  bold.sy = bold.sy + 0.1
  bold.sx = bold.sx *0.99
}

function update() {
   
  
  kasse.ox1 = kasse.x1 
  kasse.x1 = sin(t / 100) * (width / 2) + width / 2 - 10;
  kasse.x2 = kasse.x1 + 100

  
  if (bold.y > height - 35) {
    bold.sy = 0
    bold.y = height - 35
  }
  if (bold.x > width - 30) {
    bold.sx = 0
    bold.x = width - 30
  }
  if (bold.x < 30) {
    bold.s = 0
    bold.x = 30
  }
  bold.x = bold.x + bold.sx
  bold.y = bold.y + bold.sy
  
  bold.sx = 0
  var kasseh = kasse.x1 - kasse.ox1
  if (bold.y > kasse.y1 - 25 && bold.y < kasse.y2 + 25) {
    if (bold.x > kasse.x1 - 25 && bold.x < kasse.x2 + 25) {
      bold.y = bold.y - bold.sy
      bold.sy = 0
    }
  }

   if (bold.x > kasse.x1 - 25 && bold.x < kasse.x2 + 25 &&  bold.y > kasse.y1 && bold.y < kasse.y2){
        bold.sx = kasseh
        }


  for (var i=0;i<boxlist.length;i++){
 		var b = boxlist[i];
    if ((bold.y > b.y1 - 25 && bold.y < b.y2 - 25) || (bold.y > b.y1 + 25 && bold.y < b.y2 + 25)) {
    if (bold.x > b.x1 - 20 && bold.x < b.x2 + 20) {

      bold.y = bold.y - bold.sy;
      bold.sy = 0
    }
  }
  }
 


  if (mouseIsPressed && mouseX > width / 2 && mouseY > height / 4) {
    bold.x = bold.x + 5
  }

  if (mouseIsPressed && mouseX < width / 2 && mouseY > height / 4) {
    bold.x = bold.x - 5
  }

  if (mouseIsPressed && mouseY < width / 4) {
    bold.y = bold.y - 5
  }

}

function checkKeys() {
  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) {
      bold.x = bold.x - 5
    }
    if (keyCode === RIGHT_ARROW) {
      bold.x = bold.x + 5
    }
    if (keyCode === DOWN_ARROW) {
      bold.y = bold.y + 5
    }

    if (keyCode === UP_ARROW && bold.sy >= 0) {
      if(bold.sy < 1){
      bold.sy = -4.5
    }
}     
  }
}
