/* global p5 */

/*
Date: 
Author: 
*/

// DO NOT EDIT THE FOLLOWING LINE
const p = new p5(() => { });

let centerAngle = 0;
let planetAngle = 0;

p.setup = function () {
  p.createCanvas(p.windowWidth, p.windowHeight);
  p.colorMode(p.HSB, 360, 100, 100);
};


p.draw = function () {
  p.background(0, 0, 15);
  // rotate requires us to rotate around the origin
  p.push();
  p.translate(p.width / 2, p.height / 2);

  p.rotate(centerAngle);

  p.fill("yellow");
  p.noStroke();

  // draw the square from the center point out
  p.rectMode(p.CENTER);
  p.ellipse(0, 0, 100);
  p.pop();

  centerAngle += p.radians(1);

  // planet
  p.push();
  p.translate(p.width / 2, p.height / 2);

  p.rotate(planetAngle);

  p.fill(112, 0, 81);
  p.noStroke();

  p.ellipse(100, 100, 40);
  p.pop();
  planetAngle += p.radians(2);
};