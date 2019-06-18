'use strict';

function ImageAnalytics(name, filepath, displayed, clicked) {
  this.name = name;
  this.filepath = filepath;
  this.displayed = 0;
  this.clicked = 0;
  ImageAnalytics.imageDatabase.push(this); 
}

ImageAnalytics.imageDatabase = [];

var r2d2Bag = new ImageAnalytics('R2D2 Bag', 'images/bag.jpg', 0, 0);
var bananaSlicer = new ImageAnalytics('Banana Slicer', 'images/banana.jpg', 0, 0);
var poopScreen = new ImageAnalytics('Bathroom Screen', './images/bathroom.jpg', 0, 0);
var boots = new ImageAnalytics('Yellow Boots', './images/boots.jpg', 0, 0);
var toaster = new ImageAnalytics('Breakfast Toaster', './images/breakfast.jpg', 0, 0);
var bubblegum = new ImageAnalytics('Delicious Meatball Gum, Yum!', './images/bubblegum.jpg', 0, 0);
var chair = new ImageAnalytics('Gorgeous Red Chair', './images/chair.jpg', 0, 0);
var cthulhu = new ImageAnalytics('Cthulhu Eats a Guy!', './images/cthulhu.jpg', 0, 0);
var dogDuck = new ImageAnalytics('Duck Dog Muzzle', './images/dog-duck.jpg', 0, 0);
var dragon = new ImageAnalytics('YUMMY dragon meat', './images/dragon.jpg', 0, 0);
var pen = new ImageAnalytics('Office Cutlery', './images/pen.jpg', 0, 0);
var petSweep = new ImageAnalytics('Doggie Housework Helper', './images/pet-sweep.jpg', 0, 0);
var scissors = new ImageAnalytics('Pizza Slicer', './images/scissors.jpg', 0, 0);
var shark = new ImageAnalytics('Sleep With the Fishes', './images/shark.jpg', 0, 0);
var sweep = new ImageAnalytics('Put Baby to WORK', './images/sweep.png', 0, 0);
var taunTaun = new ImageAnalytics('Smells Worse Inside', './images/tauntaun.jpg', 0, 0);
var unicorn = new ImageAnalytics('You\'re a Monster if You Eat This', './images/unicorn.jpg', 0, 0);
var usb = new ImageAnalytics('Slither', './images/usb.gif', 0, 0);
var waterCan = new ImageAnalytics('Not Useless at ALL', './images/water-can.jpg', 0, 0);
var wineGlass = new ImageAnalytics('Stylish', './images/wine-glass.jpg', 0, 0);

console.log(ImageAnalytics.imageDatabase);

var left = document.getElementById('img1');
img1.addEventListener('click', getRandomImage);

var center = document.getElementById('img2');
img2.addEventListener('click', getRandomImage);

var right = document.getElementById('img3');
img3.addEventListener('click', getRandomImage);

var imagesArray = [
  './images/bag.jpg',
  './images/banana.jpg',
  './images/bathroom.jpg',
  './images/boots.jpg',
  './images/breakfast.jpg',
  './images/bubblegum.jpg',
  './images/chair.jpg',
  './images/cthulhu.jpg',
  './images/dog-duck.jpg',
  './images/dragon.jpg',
  './images/pen.jpg',
  './images/pet-sweep.jpg',
  './images/scissors.jpg',
  './images/shark.jpg',
  './images/sweep.png',
  './images/tauntaun.jpg',
  './images/unicorn.jpg',
  './images/usb.gif',
  './images/water-can.jpg',
  './images/wine-glass.jpg',
];

function getRandomNumber() {
    return Math.floor(Math.random()*ImageAnalytics.imageDatabase.length);
}

function getRandomImage() {
  var randomArray = [];
  
  for (var i = 0; i < 3; i++) {
  randomArray.push(ImageAnalytics.imageDatabase[getRandomNumber()].filepath);
  }

  console.log(getRandomNumber());
  left.src = randomArray[0];
  center.src = randomArray[1];
  right.src = randomArray[2];  
}


//Stop the randomImage generator from duplicating two of the sames images in one set
// function nonDuplication(){
// var emptyArray = [];
// while (var i = 0; i < 6; i++);
//   push(ImageAnalytics.imageDatabase);
//   if (i > 6);
//   return ? 
// }

//do loop through teh images without displaying two of the same in an iteration
// do display images
// while no two are teh Same 
// if images != continue, if images === don't

// do {
//   return getRandomImage () {
    
//   }
// }

//keep track of, and then end the click game at 25 selections
// while ('click' < 25) {
//  for (var i = 0, i <= 25; i++);
//   push(ImageAnalytics.imageDatabase);
//   if('click' > 25)
//     return ("results")
// }

getRandomImage();


