var tal= 1000
var x=200
var y= 200
var r;
var r2;
var t=1
var pp=10
var ps=0
var psp= 20
var c= 0
var cp=10
var oldsec=0;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

}
function draw() {
  background(220);
  tal=Math.round(tal)
  
  r= random(0,width-400)
  r2= random(0,height-150)
  
  fill(20,200,10)
  rect(width-200,100,200,100)
   rect(width-200,0,200,100)
   rect(width-200,200,200,100)
  
  fill(2000,30,100)
 rect(x,y,200,150)
  
    fill(0,0,0)
  textSize(20)
    text(tal+' hujbsurd',10,20);
  	textSize(40);
 	  text('hujbsurd',x+20,y+80)
  	textSize(20);
  text('hujbsurd '+t+'pc',width-170,30)
  text(pp+' hujbsurd',width-170,75)
    text(ps+' hujbsurd ps',width-170,130)
   text(psp+' hujbsurd',width-170,175)
   text(c+'% hujbsurd crit',width-170,230)
  text(cp+' hujbsurd',width-170,275)
 
	if(second()>oldsec || second()<oldsec) {
    tal+=ps;
    oldsec=second();
  }
  if(mouseIsPressed){
  if(mouseX>x&&mouseX<x+200&&mouseY>y&&mouseY<y+150){
  tal= tal +t
    x=r
    y=r2
    if(floor(random(1,101))<=c) {
      tal+=t*9;
    }
  	}
  }
    if(mouseIsPressed){
  if(mouseX>width-200&&mouseX<width&&mouseY>0&&mouseY<100&&tal>pp-1){
  tal= tal -pp
    t=round(t*1.5)
    pp=round(pp*1.8)
  	}
        if(mouseIsPressed){
  if(mouseX>width-200&&mouseX<width&&mouseY>100&&mouseY<200&&tal>psp-1){
  	tal= tal -psp;
    psp= psp+10
    ps+=1;
  	}
  
  }
    if(mouseIsPressed){
  if(mouseX>width-200&&mouseX<width&&mouseY>200&&mouseY<300&&tal>cp-1){
  	tal= tal -cp;
    cp= cp+20
    c+=1;
  	}
  }
    }
  
}
