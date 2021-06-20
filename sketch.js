const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone1,ground;
var rubber;
var hammad;
var tiktik;
var log1,log2,log3,log4,log5,log6,log7,log8,log9,log10,log11,log12,log13,log14,log15,log16,log17,log18,log19,log10,log20,log21,log22;

function setup(){
    var canvas = createCanvas(1500,600);
    engine = Engine.create();
    world = engine.world;

    stone1=new Stone(400,200,70,70);
    tiktik=new Tiktik(200,200);   
    ground=new Ground(750,580);
   rubber=new Rubber();
    log1=new Log(710,290);
    log2=new Log(730,290);
    log3=new Log(750,290);
    log4=new Log(770,290);
    log5=new Log(790,290);
    log6=new Log(810,290);
    log7=new Log(830,290);
    log8=new Log(850,290);
    log9=new Log(870,290);
    log10=new Log(890,290);
    log11=new Log(910,290);
    log12=new Log(930,290);
    log13=new Log(950,290);
    log14=new Log(970,290);
    log15=new Log(990,290);
    log16=new Log(200,290);
    log17=new Log(220,290);
    log18=new Log(240,290);
    log19=new Log(260,290);
    log20=new Log(280,290);
    log21=new Log(300,290);
    log22=new Log(320,290);
    hammad=new Hammad(100,220);



}

function draw(){
    background(0);
    Engine.update(engine);
    stone1.display();
    tiktik.display();
    ground.display();
    rubber.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();
    log9.display();
    log10.display();
    log11.display();
    log12.display();
    log13.display();
    log14.display();
    log15.display();
    log16.display();
    log17.display();
    log18.display();
    log19.display();
    log20.display();
    log22.display();
    log20.display();
   hammad.display();
}

