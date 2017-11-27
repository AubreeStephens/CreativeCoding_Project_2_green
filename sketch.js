var img, img2;
var img3;
var img4;
var img5;

var c;
var pointillize;
var maxImages=7;
var images= new Array (maxImages);
var offset=0;
var easing= 0.05;
var theta= 0;
var s= 10;
var textline=[
"I cannot touch the sun,",
"but that will not keep me from appreciating the sunset...",
];
var x; 
var index=0;

function preload(){ // preload kiss image
	img = loadImage('data/kiss1.jpg');
	img2= loadImage('data/kiss1.png'); //<-- use getting started with code to change transparency based on Mouse
	/*for (var i=1; i<images.length; i++){
		images [i]= loadImage("data/ferry"+ i+ ".png")
	}*/
	img3= loadImage('data/ferry1.png');
	img4= loadImage('data/ferry2.png');
	img5= loadImage('data/ferry3.png');
	img6= loadImage('data/ferry4.png');
	img7= loadImage('data/ferry5.png');
	img8= loadImage('data/ferry6.png');//silly
	img9= loadImage('data/ferry7.png');// adoration
}
function setup(){ //set width and height to window, image in background, 
	createCanvas (windowWidth, windowHeight);
	//img.loadPixels();
	c= img.get (775, 15);
	background (c);
	textFont("Palatino");
	x=width;
}
function draw (){ 
	//pointillize= random (2, 20); // random dots
	
	pointPaint();
	

	//fill(img.get(600,200));
	var i= 255;
	fill (i);
	textSize(30)
	textAlign(LEFT);
	// start at position, incrementall add text to bottomr of screen
	if (frameCount<500){
		x=width/5;
		var y= height-100;}
		else if(frameCount %20===0){
			x= random(0, width);
			y= random(height-100, height);
	}
	text("I cannot touch the sun, but that will not keep me from appreciating the sunset...", x, y);
	var i= 255;
	fill (i);
	i-=0.01;
	
	//x-=3;

	/*var w= textWidth(textline[index]);
	if (x<-w){
		x=width;
	}
	index=(index +1) % textline.length;*/
	
	if (frameCount>2200){ //sliding silliness
		b= img4.get (100, 500);
		background (b); // get tan background
		image (img5, 0, 0);// set image at left side
		var dy= (mouseY-img5.height/1.5)- offset; // dy is (mouseY- 1/4 of image height)- offset
		offset+=  dy * easing; //offset is dy* 0.5
		tint (255, 200); // mostly transparent
		image(img4, 0, offset); //image 4 moves up and down along y axis
	}

	if (frameCount>2000){// images move with mouse X and mouse Y positions
		image(img6, mouseX, 0);
		image(img7, mouseX, offset);
		fill (169,255, 254);
		//rotate text about itself
		textAlign(CENTER); 
		textSize(s);
		s+=0.1;
		push();
		translate (width/2, height/2);
		rotate(theta);
		text("if you find yourself daydreaming, know that I am dreaming of you...", 0, 0);
		pop();
		if (s>=40){
		s-=2;
		
		}
}
theta+=0.05;

if (frameCount>2300){
	image(img8, 500, 0);
	image(img9, mouseX-600, offset);}

/*if (frameCount>2500){
	background(img3.get(375, 300));
		image(img3, 0, 0, mouseX*2, mouseY*2);// image distorts to cursor
}*/


if (frameCount>2500){
	frameRate(3); //slow down to see text
	background (img.get (775, 15));
	tint(255, 100);// mostly transparent
	image(img2, 0, 0);// initial pointillized image
	pointPaint();
	var x= random(windowWidth);
	var y= random(windowHeight);
	fill (255);
	textSize(random(20,30));
	if (frameCount % 20===1){text("you are the star that radiates brighter in the distance", x, y)};
	if (frameCount % 20===5){text ("like the night that seems further each moment", x, y);}
	if (frameCount% 20===9){text("I will wait for you to catch up in orbit", x, y);}
	//noLoop();


}
}


function pointPaint(){
//from Shiffman Learning Processing, Example 15_14

	pointillize= random (10, 30); // random dots
	//background (c);
	//image (img, 50, 50);

//set up for array 
	var x= floor(random(img.width));
	var y= floor(random(img.height));
	var loc= (x+(y*img.width))*4;

//array for RGB	
	img.loadPixels();

	var r = img.pixels[loc   ];
  	var g = img.pixels[loc + 1];
  	var b = img.pixels[loc + 2];
  
  noStroke();
  fill(r, g, b, random(100,200)); //varying transparencies
  ellipse(x, y, pointillize, pointillize); //dots of random size
}