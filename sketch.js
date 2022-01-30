var cat;
var bgImg;


function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png" , "images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg = loadImage("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png" , "images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");

    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 
    cat = createSprite(870,600);
    cat.addImage(catImg1);
    cat.scale = 0.2;

    mouse = createSprite(140,600);
    mouse.addImage(mouseImg);
    mouse.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catLastImage" , catImg3);
        cat.changeAnimation("catLastImage");
        cat.x = 300;
        cat.scale = 0.2;

        mouse.addAnimation("mouseStanding" , mouseImg3);
        mouse.changeAnimation("mouseStanding");
        mouse.x = 140;
        mouse.scale = 0.2;



    }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyCode === LEFT_ARROW) {
      mouse.addAnimation("mouseTeasing" , mouseImg2)
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;

      cat.velocityX = -10;

       cat.addAnimation("catWalking" , catImg2);
       cat.changeAnimation("catWalking");
       cat.frameDelay = 10;
   }

}
