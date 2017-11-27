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
}
function setup(){ //set width and height to window, image in background, 
	createCanvas (windowWidth, windowHeight);
	//img.loadPixels();
	c= img3.get (img3.width.random, img3.height.random);
	background (c);
	textFont("Palatino");
}
function draw (){ 
	//pointillize= random (2, 20); // random dots
	
	pointPaint();
	/*if (frameCount> 200){
		image(img3, 0, 0, mouseX*2, mouseY*2);// image distorts to cursor
	}*/
	
	if (frameCount>400){ //sliding silliness
		b= img4.get (100, 500);
		background (b); // get tan background
		image (img5, 0, 0);// set image at left side
		var dy= (mouseY-img5.height/1.5)- offset; // dy is (mouseY- 1/4 of image height)- offset
		offset+=  dy * easing; //offset is dy* 0.5
		tint (255, 200); // mostly transparent
		image(img4, 0, offset); //image 4 moves up and down along y axis
	}

	if (frameCount>500){// images move with mouse X and mouse Y positions
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
		if (text>width){
		s-=0.5;
		}

	}
	theta+=0.02;
	
}

function pointPaint(){
	pointillize= random (2, 20); // random dots
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