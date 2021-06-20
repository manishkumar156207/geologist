class Tiktik
{
    constructor(x,y)
    {
        var option={
            'restitution' : 0.8,
            'friction': 90,
            'density': 0.1
        }
        this.body=Bodies.rectangle(x,y,70,25,option);
        World.add(world,this.body);
        
        this.width=70;
        this.height=25;
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("#FF0000")
        rect(0,0,this.width,this.height);
        pop();     
    }
}