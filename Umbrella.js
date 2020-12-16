class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        //load the image of the man.png 
        this.boyimage = loadImage("man.png"); 
        this.umbrella = Bodies.circle(x,y,50,options);
        //create a umbrella body which will be a Circular Phy Engine body
        this.radius = 50;
        // Add the umbrella body to the world.
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        this.umbrella = Bodies.circle(x,y,50,options);
        //use image() to draw the image of the man.
    }
}