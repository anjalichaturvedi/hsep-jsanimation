/* global p5 */

/*
Date: 
Author: 
*/

// DO NOT EDIT THE FOLLOWING LINE
const p = new p5(() => { });

// global variables
let img;
let img2;
let img3;
let star1, star2, star3, star4, star5, star6, star7, star8, star9, star10, star11;
let stars = new Array(11);
let posX, posY;
let width = 390;
let height = 400;
var meteors = new Array(1);
let planetAngle = 0;
let cnv;
let dimension = 0;

p.preload = function () {

  img = p.loadImage('Starry Night.jpg');
  img2 = p.loadImage('download.png');
  img3 = p.loadImage('Starry Night.png')
}

p.setup = function () {

  cnv = p.createCanvas(p.windowWidth, p.windowHeight);
  p.colorMode(p.HSB, 360, 100, 100);
  p.image(img, 0, 0, 790, 664.75);
  star1 = new Star(70, 20, 5, 30);
  star2 = new Star(176, 15, 1, 15);
  star3 = new Star(268, 22, 1, 22);
  star4 = new Star(324, 29, 1, 20);
  star5 = new Star(485, 47, 5, 35);
  star6 = new Star(182, 108, 5, 25);
  star7 = new Star(567, 145, 5, 32);
  star8 = new Star(261, 214, 2, 19);
  star9 = new Star(26, 300, 2, 17);
  star10 = new Star(100, 320, 5, 33);
  star11 = new Star(268, 350, 15, 50);
  stars = [star1, star2, star3, star4, star5, star6, star7, star8, star9, star10, star11];

  cnv.mouseOver(showWindow); // mouse over
  cnv.mouseOut(hideWindow); // mouse out

  posX = 390;
  posY = 400;
  for (let i = 0; i < meteors.length; i++) {
    let meteor = new Meteor(p.random(posX), p.random(posY), p.random(1, 2), p.random(2, 4));
    meteors[i] = meteor;
  }

};

p.draw = function () {

  p.image(img, 0, 0, 790, 664.75);
  p.image(img3, 0, 0, 790, 664.75);

  for (let i = 0; i < stars.length; i++) {
    stars[i].twinkle();
  }

  for (let i = 0; i < meteors.length; i = i + 1) {
    meteors[i].show();
    meteors[i].fall();
    meteors[i].glow();
    meteors[i].trail();
    meteors[i].resetMeteor();
  }

  p.push();
  p.translate(200, 400); 
  p.rotate(planetAngle)
  p.noStroke();
  p.rectMode(p.CENTER);
  p.image(img2, -200, -275, 50, 50);
  p.pop();
  planetAngle += p.radians(0.40);

  p.image(img3, 0, 0, 790, 664.75);

  p.fill("yellow");
  p.rect(544, 564, dimension, dimension);
  p.rect(479, 617, dimension, dimension);
  p.rect(656, 605, dimension, 10);
  p.rect(707, 605, dimension, 10);
};

function showWindow() {
  dimension += 14;
} 

function hideWindow() {
  dimension -= 14;
} 

class Star {
  constructor(x, y, radMin, radMax) {
    this.x = x;
    this.y = y;
    this.radMin = radMin;
    this.radMax = radMax;
    this.radius = radMin;
    this.growing = true;
  }

  twinkle() {
    if (this.radius == this.radMax) {
      this.growing = false;
    }
    if (this.growing == true) {
      this.radius += 1;
    } else if (this.growing == false && this.radius != this.radMin) {
      this.radius -= 1;
    } else {
      this.growing = true;
    }
    p.fill("yellow");
    p.noStroke();
    p.ellipse(this.x, this.y, this.radius, this.radius);
  }
}

class Meteor {

  constructor(x, y, d, fallSpeed) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.fallSpeed = fallSpeed;
  }

  show() {
    p.noStroke();
    p.fill(210, 50, 100);
    p.ellipse(this.x, this.y, this.d / 2);
  }

  trail() {
    if (this.x > 0) {
      p.ellipse(this.x - 1, this.y - 1, this.d / 2 - 2);
      p.ellipse(this.x - 2, this.y - 2, this.d / 2 - 4);
      p.ellipse(this.x - 3, this.y - 3, this.d / 2 - 6); 
      p.ellipse(this.x - 4, this.y - 4, this.d / 2 - 8);
      p.fill(0, 0, 100);
      p.ellipse(this.x, this.y, this.d / 4);
    }
  }

  glow() {
    this.d = this.d + 0.2;
  }

  fall() {
    this.y = this.y + this.fallSpeed;
    this.x = this.x + this.fallSpeed;
  }

  resetMeteor() {
    if (this.y > posY) {
      this.y = 0;
      this.x = p.random(posX);
      this.d = p.random(1, 2);
    }
  }
}

