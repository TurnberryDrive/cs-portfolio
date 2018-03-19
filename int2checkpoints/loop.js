/* global draw ellipse rect p processing width height size */
var sketch = function(processing) {with(processing) {size(1500, 1500);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


background(5, 4, 4);
    for(var i = 0; i < width; i+=50){
        for(var j = 0; j < height; j+=50){
            var size = random(40)
            fill(random(255), random(255), random(255));
            stroke(random(255), random(255), random(255));
            ellipse(i,j,size,size);
        }
    }

draw = function() {
    for(var i = 0; i < width; i+=50){
        for(var j = 0; j < height; j+=50){
            var size = random(50)
            fill(random(255), random(255), random(255));
            stroke(random(255), random(255), random(255));
            ellipse(i,j,size,size);
        }

    }


};  

// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);