petter_pan = "";
harry_potter = "";
leftWristx = 0;
leftWristy = 0;
rightWristx = 0;
rightWristy = 0;
scoreleftwrist = 0;
scorerightwrist = 0;
song_playing = "";

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
    poseNet.on("pose", gotposses)
}

function draw() {
    image(video, 0, 0, 800, 700);

    petter_pan.isPlaying();

    fill("#fc05d7");
    stroke("#fc0505");

    if(scoreleftwrist > 0.2) {
        circle(leftWristx, leftWristy , 20);
        petter_pan.stop();
    }
    if(petter_pan.isPlaying(false)) {
        petter_pan.play();
        document.getElementById("song_name").innerHTML = "the song that is playing is Petter Pan Theme Song";
    }

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

        scoreleftwrist = results[0].pose.keypoints[9].scoreleftwrist;

        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        console.log("left wrist x is - "+ leftWristx + "left wrist y is - "+ leftWristy);

        rightWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.xy;
        console.log("right wrist x is - "+ rightWristx + "right wrist y is - "+ rightWristy);
    }
}
