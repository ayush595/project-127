song1= "music.mp3";
song2= "music2.mp3";
function preload() {
    songe = loadSound("music.mp3" , "music2.mp3")
}
function setup() {
    canvas= createCanvas(500,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video , 0, 0, 500, 500);
}