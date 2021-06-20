class Stone
{
    constructor(x,y,width,height)
    {
        var option={
            'restitution' : 0.8,
            'friction': 90,
            'density': 0.1
        }
        this.body=Bodies.circle(x,y,50,option);
        World.add(world,this.body);
        
        this.width=width;
        this.height=height;
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

