class Thunder{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.image1 = loadImage("1.png");
        this.image2 = loadImage("2.png");
        this.image3 = loadImage("3.png");
        this.image4 = loadImage("4.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display(){
        
        push();
        
        imageMode(CENTER);
        var rand = Math.round(random(1,4));
        switch(rand) {
          case 1: image(this.image1,200,50,400,400);
                  break;
          case 10: image(this.image2,200,50,400,400);
                 break;
          case 20: image(this.image3,200,50,400,400)
                  break;
          case 30: image(this.image4,200,50,400,400);
                 break;
         
          default: break;
        }
        if(frameCount%2==0){
            World.remove(world,this.body)
        }
       
        pop()
    }
}