petter_pan = "";
harry_potter = "";
leftWristx = 0;
leftWristy = 0;
rightWristx = 0;
rightWristy = 0;

function preload() {
    petter_pan = loadSound("music2.mp3");
    harry_potter = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(800, 700);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, gotResuts);
    pose.on("pose", gotposses)
}

function draw() {
    image(video, 0, 0, 800, 700);
}

function sound() {
    petter_pan.play();
    petter_pan.rate(1);
    petter_pan.setVolume(1);
}

function gotResuts() {
    console.log("Do you copy");
}

function gotposses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        console.log("left wrist x is - "+ leftWristx + "left wrist y is - "+ leftWristy);

        rightWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.xy;
        console.log("right wrist x is - "+ rightWristx + "right wrist y is - "+ rightWristy);
    }
}
