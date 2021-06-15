var back0;
var ca1;
var mou1;


function preload() {

    back=loadImage("images/garden.png");
    catImg1=loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3=loadAnimation("images/cat4.png");

    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg3=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);

    backFu();
   
    cat1Fu();
    mouse1Fu();
}

function draw() {

    background(255);

console.log(ca1.x-mou1.x);

if(ca1.x-mou1.x<80){
    ca1.changeAnimation("c3",catImg3);
    mou1.changeAnimation("m3",mouseImg3);
    ca1.velocityX=0;
}
    
    drawSprites();
}


function keyPressed(){

    if(keyCode===LEFT_ARROW){
        ca1.changeAnimation("c2",catImg2);
        ca1.velocityX=-3;
        mou1.changeAnimation("m2",mouseImg2);
        
    }

    

  
}

function backFu(){
    back0=createSprite(500,400,20,20);
    back0.addImage("b",back);
}

function cat1Fu(){
    ca1=createSprite(800,550,20,20);
    ca1.addAnimation("c1",catImg1);
    ca1.addAnimation("c2",catImg2);
    ca1.addAnimation("c3",catImg3);

    ca1.scale=0.1;
}

function mouse1Fu(){
    mou1=createSprite(200,550,20,20);
    mou1.addAnimation("m1",mouseImg1);
    mou1.addAnimation("m2",mouseImg2);
    mou1.addAnimation("m3",mouseImg3);
    mou1.scale=0.1;
}
