require(["node_modules/p5/lib/p5.min", "moduleA"], 
    
    function(p5, moduleA) {

        var myp5 = new p5(
            
            function(sketch) {
            
                sketch.setup = function() {
                    //var canvas = createCanvas(window.innerWidth*0.95 , window.innerHeight*0.95);
                    //canvas.parent("p5container");
                    sketch.createCanvas(window.innerWidth*0.95 , window.innerHeight*0.95)
                }

                
                sketch.draw = function() {
                    sketch.background(50);
                    var tmp = moduleA.first();
                    console.log(tmp);
                }

                
                sketch.windowResized = function() {
                    sketch.resizeCanvas(window.innerWidth*0.95 , window.innerHeight*0.95);
                }
            },
            
            'p5container');
    
    }        
        
)




