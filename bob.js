class Bob{
    constructor(x,y,r){
    
       var bobOptions = {
           isStatic: false,
           restitution: 0.3,
           friction: 0.5,
           density: 3    
       }
    
       this.x = x;
       this.y = y;
       this.r = r;
       this.body = Bodies.circle(this.x,this.y,this.r/2,bobOptions);
      
       
       
    
       World.add(world,this.body);
    
    
    
    }
    
        display(){
    
        var bobpos  = this.body.position;
        
         
        push();
        
        translate(bobpos.x,bobpos.y); 
        rectMode(CENTER); 
        strokeWeight(3); 
        fill("orange"); 
        circle(0,0,this.r); 

        pop(); 
    
    }
    }