let classifier;
let img;
let label = "waiting .."

function preload(){
    classifier = ml5.imageClassifier("MobileNet");
    img = loadImage("cow.jpg");
}

function gotResult(results) {
  // The results are in an array ordered by confidence
  
  label = results[0].label;
  console.log(label);
}

function setup() {
  createCanvas(400, 400);
  classifier.classify(img, gotResult, 1);
}

function draw() {
  background(220);
  image(img, 0, 0, width, height);
  
  rectMode(0);
  fill(0);
  rectMode(200, 200, 400, 50)
  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);
  noStroke();
  text(label, 200, 200);
}