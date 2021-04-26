/* global p5 */

/*
Date: 
Author: 
*/

// DO NOT EDIT THE FOLLOWING LINE
const p = new p5(() => {});

let posX, posY;
let width = 700;
let height = 700;
var snowflakes = new Array(100);

p.setup = function() {
  posX = 700; // set possible x positions of snowflakes
  posY = 700; // set possible y positions of snowflakes
  p.createCanvas(width, height);
  p.colorMode(p.HSB, 360, 100, 100);

  // TODO: create the snowflakes
  for (let i = 0; i < snowflakes.length; i++) {
    // declare a new snowflake
    let snowflake = new SnowFlake(p.random(posX), p.random(posY),  p.random(5, 13), p.random(1, 7));
    // add the snowflake to the array
    snowflakes[i] = snowflake;
  }
};


p.draw = function() {
  p.background(0, 0, 15);
  drawSnowScene();
  p.fill("white");

  // run all snowflake functions
  for (let i = 0; i < snowflakes.length; i++) {
   snowflakes[i].show();
   snowflakes[i].fall();
   snowflakes[i].resetSnowflake();
  }
};

function drawSnowScene() {
  
  // hands
  p.strokeWeight(5)
  p.stroke(32, 100, 38);
  p.line(450, 450, 500, 400);
  p.line(375, 450, 320, 400);
  p.strokeWeight(0);

  // three balls
  p.fill("white");
  p.ellipse(width/2 + 70, 540, 150);
  p.ellipse(width/2 + 70, 450, 100);
  p.ellipse(width/2 + 70, 380, 75);
  
  // nose
  p.fill(30, 100, 100)
  p.triangle(width/2 + 50, 400, width/2 + 65, 380, width/2 + 75, 380);
  
  // eyes
  p.fill("black");
  p.ellipse(width/2 + 60, 370, 10);
  p.ellipse(width/2 + 80, 370, 10);
  
  // mouth
  p.fill("black");
  p.ellipse(width/2 + 49, 385, 6);
  p.ellipse(width/2 + 55, 390, 6);
  p.ellipse(width/2 + 62, 393, 6);
  p.ellipse(width/2 + 70, 394, 6);
  p.ellipse(width/2 + 78, 393, 6);
  p.ellipse(width/2 + 85, 390, 6);
  p.ellipse(width/2 + 91, 385, 6);
  
  //////////////////////////////////////////////////////////////////
  
  // TODO: create buttons
  p.fill("red");
  p.ellipse(width/2 + 70, 430, 10);
  p.fill("yellow");
  p.ellipse(width/2 + 70, 450, 10);
  p.fill("green");
  p.ellipse(width/2 + 70, 470, 10);
  
  // TODO: create snow drifts
  p.fill("white");
  p.ellipse(0, 900, 900, 600);
  p.ellipse(500, 750, 600, 400);
}

//////////////////////////////////////////////////////////////////

class SnowFlake {
  // the constructor will be called whenever you run `new SnowFlake()`
    constructor(x, y, d, fallSpeed) {
    this.x = x; // x coordinate of snowflake
    this.y = y; // y coordinate of snowflake
    this.d = d; // diameter of the circle
    this.fallSpeed = fallSpeed; // fallspeed of the snowflake
  }


  // draw the snowflake
  show() {
    // TODO: draw your snowflake
    // hint: start with a circle
    p.noStroke();
    p.fill(0, 0, 100);
    p.ellipse(this.x, this.y, this.d / 2);
  }

  // change the velocity of the snowflake
  fall() {
    this.y += this.fallSpeed;
  }

  // resets the snowflake's position when it hits the ends of the screen
  resetSnowflake() {
   if (this.y > posY) {
      // if we reach the end of the screen - reset x and y
      // how do we get the snowflake back to the top of the screen?
      // If we don't want to  specify x and y, we could  make those random
      this.y = 0;
      this.x = p.random(posX);
    }
  }
}