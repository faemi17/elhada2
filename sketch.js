var fary1,fary1Img,faryVoice;
var starImg,bgImg;
var star, starBody;
//crea la variable para el sprite del hada y fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	fary1Img = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
        faryVoice =loadSound("sound/joyMusic.mp3")
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//carga aquí la animación del hada
}

function setup() {
	createCanvas(800, 750);

	//escribe el código para reproducir el sonido fairyVoice

	//crea el sprite del hada, y agrega la animación para el hada


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fary1 = createSprite(200,200,20,20);
        fary1.addAnimation("hada",fary1Img);
	fary1.scale=0.3

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

 // console.log(star.y);

  //escribe aquí el código para detener la estrella en la mano del hada
    if(star.y > 470 && starBody.position.y > 470){
	    Matter.Body.setStatic(starBody,true);
    }


  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//escribe el código para mover al hada a la izquierda y derecha
	if(keyCode === LEFT_ARROW){
		fary1.x= fary1.x  -5;
	}
     
	if(keyCode === RIGHT_ARROW ){
		fary1.x= fary1.x  +5;
	}
}
