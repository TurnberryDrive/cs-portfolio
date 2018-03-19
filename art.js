/* global draw ellipse rect p processing width height size background*/
var sketch = function(processing) {with(processing) {size(1500, 1500);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

background(209, 232, 249);
var startPlace = -300;


drawBalloon = function(x,y) { //balloon
    line(x, y, x, y + 60);
    triangle(x, y + 19, x - 10, y + 30, x + 10, y + 30);
    ellipse(x, y, 40, 45);
    
    if(mouseX > 700){
        fill(random(255), random(255), random(255));
    }
    else{
        fill(64, 224, 208);
    }
    
    
};

var circles = [];

mouseClicked = function() {
    circles.push({
        x: mouseX,
        y: mouseY
    });
};

drawCloud = function(x, y) { //cloud
    ellipse(x, y, 100, 100);
    ellipse(x + 40, y + 70, 120, 120);
    ellipse(x - 30, y + 70, 100, 100);
    ellipse(x + 60, y + 10, 100, 100);
    ellipse(x + 100, y + 40, 100, 100);
};


draw = function() {
    background(209, 232, 249);
    
    // moving the bottom row of clouds
    for (var i = 0; i < width; i += 600) {
        for (var j = startPlace; j < height; j+=600) {
            stroke(252, 253, 255);
            fill(252, 253, 255);
            drawCloud(j,i);
        }
    }
    // moving the top row of clouds
    for (var i = 0; i < width; i += 300) {
        for (var j = startPlace; j < height; j+=300) {
            stroke(252, 253, 255);
            fill(252, 253, 255);
            drawCloud(j,i);
        }
    }
    startPlace++;
    
    strokeWeight(1.75); //part of rope
    fill(209, 232, 249);
    stroke(242, 224, 155);
    ellipse(700,560,80,10);
    
    stroke(242, 237, 138); //hot air balloon 
    
    fill(249, 80, 7); //red stripe
    ellipse(700,400,300,300); 
    
    fill(237, 211, 14); //yellow stripe
    ellipse(700,400,250,300);
    
    fill(249, 80, 7); //red stripe
    ellipse(700,400,200,300);
    
    fill(237, 211, 14); //yellow stripe
    ellipse(700,400,150,300);
    
    fill(249, 80, 7); //red stripe
    ellipse(700,400,100,300);
    
    fill(237, 211, 14); //yellow stripe
    ellipse(700,400,35,300);
    
    stroke(242, 224, 155);
    line(680,600,660,545); //left rope
    
    line(720,600,740,545); //right rope
    
    fill(229, 156, 20); //basket
    rect(675,590,50,50);
    
    stroke(242, 224, 155);
    ellipse(700,546,70,10);
    
    fill(150, 12, 143);
    rect(680,590,10,20);
    rect(700,590,10,15);
    
    // drawing the balloons
    for (var i = 0; i < circles.length; i++) {  // ++ is adding 1
        var currentCircle = circles[i]; // object
        drawBalloon(currentCircle.x, currentCircle.y);
    }
};    
    

    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
