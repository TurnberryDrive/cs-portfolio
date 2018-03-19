/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(1500, 1500);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

var numcircles = 0;

draw = function() {

    numcircles++;
    
    ellipse(mouseX,mouseY,30, 30);
    
    if(mouseX > 500){
        fill(128, 128, 128);
    }
    else{
        fill(128, 128 + numcircles, 128);
    }
    
    
    
};    

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
