var img;
var c;
var pointillize;

function preload(){ // preload kiss image
	img = loadImage('data/kiss1.jpg');
}
function setup(){ //set width and height to window, image in background, 
	createCanvas (windowWidth, windowHeight);
	//img.loadPixels();
	c= img.get (img.width.random, img.height.random);
	background (c);
}
function draw (){ 
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