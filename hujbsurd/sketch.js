var hujbsurd = 0;
var x = 200;
var y = 200;
var x2 = window.innerWidth +1;
var y2 = window.innerHeight +1;
var r;
var r2;
var r3;
var r4;
var t = 1;
var pcp = 10;
var ps = 0;
var psp = 20;
var psc = 0;
var pscp = 10;
var c = 0;
var cp = 10;
var oldsec = 0;
var tjek=true;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

}

function draw() {
  background(220);
  hujbsurd = Math.round(hujbsurd)

  r = random(0, width - 400)
  r2 = random(0, height - 150)
  r3 = random(0, width - 400)
  r4 = random(0, height - 150)
  fill(20, 200, 10)
  rect(width - 200, 100, 200, 100)
  rect(width - 200, 0, 200, 100)
  rect(width - 200, 200, 200, 100)
  rect(width - 200, 300, 200, 100)
  

  fill(2000, 30, 100)
  rect(x, y, 150, 150)


  fill(0, 0, 0)
  textSize(20)
  text(hujbsurd + ' hujbsurd', 10, 20);
  textSize(40);
  text('hujbsurd', x - 1, y + 80)
  textSize(20);
  text('hujbsurd ' + t + 'pc', width - 180, 30)
  text(pcp + ' hujbsurd', width - 180, 75)
  text(ps + ' hujbsurd ps', width - 180, 230)
  text(psp + ' hujbsurd', width - 180, 275)
  text(psc + '% hujbsurd ps crit', width - 180, 330)
  text(pscp + ' hujbsurd', width - 180, 375)
  text(c + '% hujbsurd crit', width - 180, 130)
  text(cp + ' hujbsurd', width - 180, 175)
  if(tjek==true){
    fill(20, 200, 10)
    rect(width - 200, 400, 200, 100)
    fill(0)
    text('10000 hujbsurd', width-180,475)
    text('få ny hujbsurd', width-180,430)
  }
  
  fill(78,57,200)
  rect(x2,y2,75,75)
  fill(0)
  textSize(18)
  text('hujbsurd', x2+3, y2 + 40)

  if(mouseIsPressed){
    if(mouseX > width - 200 && mouseX < width && mouseY > 400 && mouseY < 500 && hujbsurd > 10000 - 1 && tjek==true){
    hujbsurd=hujbsurd-10000
    x2=r3
    y2=r4
    tjek=false;
    }
  }
  if (second() > oldsec || second() < oldsec) {
    if (floor(random(1, 101)) <= psc) {
      hujbsurd += ps * 10;
    }else{
      hujbsurd += ps;
    }
    oldsec = second();
  }
  if (mouseIsPressed) {
    if (mouseX > x && mouseX < x + 150 && mouseY > y && mouseY < y + 150) {
      hujbsurd = hujbsurd + t
      x = r
      y = r2
      if (floor(random(1, 101)) <= c) {
        ecrit();
        hujbsurd += t * 9;
      }
    }
  }
  if (mouseIsPressed) {
    if (mouseX > width - 200 && mouseX < width && mouseY > 0 && mouseY < 100 && hujbsurd > pcp - 1) {
      hujbsurd = hujbsurd - pcp;
      t = round(t * 1.5);
      pcp = round(pcp * 1.8);
    }
    if (mouseIsPressed) {
      if (mouseX > width - 200 && mouseX < width && mouseY > 200 && mouseY < 300 && hujbsurd > psp - 1) {
        hujbsurd = hujbsurd - psp;
        psp = psp + 10;
        ps += 1;
      }

    }
    if (mouseIsPressed) {
      if (mouseX > width - 200 && mouseX < width && mouseY > 100 && mouseY < 200 && hujbsurd > cp - 1 && c < 100) {
        hujbsurd = hujbsurd - cp;
        cp = round(cp*1.3);
        c += 1;
      }
    }
    if (mouseIsPressed) {
      if (mouseX > width - 200 && mouseX < width && mouseY > 300 && mouseY < 400 && hujbsurd > pscp - 1 && psc<100) {
        hujbsurd = hujbsurd - pscp;
        pscp += 30;
        psc += 1;
      }
    }

  }
  if (mouseIsPressed) {
    if (mouseX > x2 && mouseX < x2 + 75 && mouseY > y2 &&   mouseY < y2 + 75) {
      hujbsurd = hujbsurd + t*10
      x2 = r3
      y2 = r4
      if (floor(random(1, 101)) <= c) {
        hujbsurd += t * 9 * 10;
        ecrit2();
      }
    }
  }
}
  function ecrit() {
    for (var i = 0; i < 300; i += 1) {
      fill(200, 200, 0)
      ellipse(x + 75, y + 75, i)
    }
  }
function ecrit2() {
    for (var i = 0; i < 150; i += 1) {
      fill(200, 200, 0)
      ellipse(x2 + 75/2, y2 + 75/2, i)
    }
  }
