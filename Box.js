class Box{
  constructor(x,y,width,height){

  var options = {
      isStatic:false,
      friction:0.4
  }  

  this.x = x;
  this.y = y;
  this.width = width; 
  this.height = height;
  this.body = Bodies.rectangle(x,y,width,height,options);
  World.add(world, this.body);

  }

  display(){
    var pos = this.body.position;
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
  }
}