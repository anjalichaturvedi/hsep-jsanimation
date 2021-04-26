/* global p5 */

/*
Date: 
Author: 
*/

// DO NOT EDIT THE FOLLOWING LINE
const p = new p5(() => { });

p.setup = function (){
p.createCanvas(400, 400);
p.colorMode(p.HSB, 360, 100, 100);
p.strokeWeight(6);
p.background(95);
}

// create brushHue variable
let brushHue;

p.setup = function () {
 // Canvas & color settings
 p.createCanvas(400, 400);
 // hue, saturation, brightness
 p.colorMode(p.HSB, 360, 100, 100);
 // initialize the brush hue value to 0
 brushHue = 0;
 p.strokeWeight(6);
 p.background(95);
}

p.draw = function () {
 // function that sets the color of the stroke and fill
 chooseColors();
 // draw shapes where the mouse is
 p.rect(p.mouseX, p.mouseY, 15, 15);
  // continuously update the brush hue
 brushHue += 1;
  // loop value back to 0 when it reaches 360
 if (brushHue >= 360) {
   brushHue = 0;
 }
}

// clear the screen
p.keyPressed = function () {
 p.background(95);
}

// sets the color of the stroke and fill
function chooseColors() {
 p.stroke(brushHue, 50, 80);
 p.fill(brushHue, 50, 80);
}

p.draw = function () {
 // function that sets the color of the stroke and fill
 chooseColors();
 // draw shapes where the mouse is
 p.rect(p.mouseX, p.mouseY, 15, 15);
  // continuously update the brush hue
 brushHue += 1;
  // loop value back to 0 when it reaches 360
 if (brushHue >= 360) {
   brushHue = 0;
 }
}

