class Polygon{
    constructor(x,y,r){
  
    this.image = loadImage("sprites/polygon.png");

    var options = {
        friction: 0.4,
        isStatic: true
    }

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.body = Bodies.circle(x,y,r);
    World.add(world,this.body);    
    }

    display(){

    var pos = this.body.position;
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,40,40);
    ellipseMode(CENTER)
    ellipse(this.image,this.body.position.x,this.body.position.y,this.r);

    }

    }
