/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var xPos = 6;
var yPos = 2;
var weight = 8;

draw = function() {
    
     // draw blue circles from upper left to lower right
    strokeWeight(0);
    stroke(255, 179, 236);
    ellipse(250,yPos,250,35);
    xPos = xPos + 20;
    yPos = yPos + 20;
    
};    

draw = function() {
    
    // draw blue circles from upper left to lower right
    strokeWeight(0);
    stroke(0, 153, 0);
    fill(0, 153, 0)
    ellipse(200,200,300,300);
    
    strokeWeight(0);
    stroke(51, 204, 51);
    fill(51, 204, 51)
    ellipse(200,200,270,270);
    
    strokeWeight(0);
    stroke(102, 255, 102);
    fill(102, 255, 102)
    ellipse(200,200,260,260);
    
    strokeWeight(0);
    stroke(255, 153, 194);
    fill(255, 153, 194)
    ellipse(200,200,230,230);
    
    
};
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
