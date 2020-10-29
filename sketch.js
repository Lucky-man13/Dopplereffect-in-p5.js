function setup() {
  createCanvas(window.innerWidth, window.innerHeight); 
  frameRate(60)
  slider = createSlider(1,10,5,0.1)
  slider.position(1,5)
  sliderMod = createSlider(1,60,10,1)
  sliderMod.position(1,25)
}
let   control = 1
let   x       = 30
let   y
let   t       = -1;
let   bruh    = 0;
let   circles = [];

function draw() { 
  background('white')

  let s = slider.value()
  
  let mod = sliderMod.value()
  if (bruh==0) {
    textAlign(CENTER)
    textSize(width/15)
    text('Click here to start',width/2,height/2)
  }
  else {
    textAlign(LEFT)
    fill('black')
    noStroke()
    textSize(20)
    text(s,slider.x+slider.width+10,20) 
    text((60/mod).toFixed(2) + ' Hz',sliderMod.x+sliderMod.width+10,40) 
    textAlign(RIGHT)
    text('Press "m" to switch controls',width,20)

    stroke('black')
    noFill()
    for (i = 0; i < circles.length; i++) {
      circle(circles[i].x,circles[i].y,(t-circles[i].t)*s )
    }
    fill('blue')
    noStroke()
    circle(width*3/4,y,40)
    fill('red')
    if (control==1) {
      circle(x,y,40) } 
    else {
      circle(mouseX,mouseY,40)}

  }
    
  
  
  
  if (t%mod==0) {
    
    circles.push(new Circle())
    
    //death
    if ((t-circles[0].t)*s > 2*sqrt(pow(width,2)+pow(height,2))-50) {
     circles.splice(0,1)

    }
  }
  
  //death();
  t = t + bruh%2
  y = height/2
  
  if (t%1000<500 && bruh%2==1) {x = x+width/1000}
    else if        (bruh%2==1) {x = x-width/1000}
  
}

class Circle {
  constructor() {
    
    if (control == 1) {
      this.x = x
      this.y = y
    }
    else {
      this.x = constrain(mouseX,0,width);
      this.y = constrain(mouseY,0,height);
    }
    
    this.t = t 
  }
}
function keyPressed() {
  if (keyCode == 32) {bruh++}
}
function keyPressed() {
  if (keyCode == 77) {control=(control+1)%2}
}
function mousePressed() {
  if (bruh==0) {bruh++}
}


