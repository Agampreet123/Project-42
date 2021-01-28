class Umbrella{
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            density:1.2
        }
        this.x = x
        this.y = y
       this.radius = radius
        this.image = loadImage("walking_1.png");
        this.body = Bodies.circle(this.x,this.y,this.radius,options);
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,400,400);
        pop()
    }
}