petter_pan = "";
harry_potter = "";

function preload() {
    petter_pan = loadSound("music2.mp3");
    harry_potter = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(800, 700);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 800, 700);
}

function sound() {
    petter_pan.play();
}
