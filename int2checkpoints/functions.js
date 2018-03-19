/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(1500,1500);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var counter = 0;

drawTurtle = function (x,y){
        fill(134, 247, 103);
        ellipse(x + 10,y - 135,80,100); //head
    
        ellipse(x - 70,y - 80,50,150); //left arm
        
        ellipse(x - 60,y + 60,50,150); //left leg
        
        ellipse(x + 80,y - 80,50,150); //right arm
        
        ellipse(x + 80,y + 60,50,150); //right leg
        
        fill(random(255), random(255), random(255));
        ellipse(x + 5,y,200,250); //body, shell
        ellipse(x + 5,y,190,240);
        
        fill(9, 10, 9);
        ellipse(x - 5,y - 160,10,10); //left eye
        
        ellipse(x + 25,y - 160,10,10); //right eye
    
    }
    mouseClicked = function (){ //turtle appears when mouse is clicked
        drawTurtle(mouseX,mouseY);
        counter++;
        if (counter > 50){
            background(10000,10000,10000);
            counter=0;
        
        }
    }
    

draw = function() {
    
    
};    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
