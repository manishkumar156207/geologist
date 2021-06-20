class Ground {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,2000,30,options);
      this.width = 2000;
      this.height = 30;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("#C0C0C0")
      rect(pos.x, pos.y, this.width, this.height);
    }
  }

