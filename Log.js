class Log {
    constructor(x,y,)
    {
        var option={
            'restitution' : 0.8,
            'friction': 90,
            'density': 0.1
        }
        this.body=Bodies.rectangle(x,y,10,10,option);
        World.add(world,this.body);
        
        this.width=10;
        this.height=10;
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("#FF00FF")
        rect(0,0,this.width,this.height);
        pop();     
    }
}