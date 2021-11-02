song1 = "";
song2 = "";

function preload()
{
	song2 = loadSound("peter-pan-ringtone.mp3")
    song1 = loadSound("harry_potter_theme.mp3");
}

rightWristy = 0;
leftWristy = 0;
rightWristx = 0;
leftWristx = 0;


function setup() {
  canvas = createCanvas(600, 500);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results) {
    if (results.length > 0) {
      
      leftWristy = results[0].pose.leftWrists.y;
      rightWristy = results[0].pose.rightWrist.y;
      leftWristy = results[0].pose.leftWrists.x;
      rightWristy = results[0].pose.rightWrist.x;
      console.log("leftWristy  = " + floor(leftWristy) + " rightWristy = " + floor(rightWristy));
    }
  }

function draw() {
  image(video, 600, 500);
  
  fill("#32CD32");
  stroke("#32CD32"); 
  circle(rightWristx, rightWristy, 15)

  fill("#FF0000");
  stroke("#FF0000"); 
  circle(leftWristx, leftWristy, 15)

  if (rightWristx > 150 && rightWristx < 450 && rightWristy > 125 && rightWristy < 375  );{
song2.play();
document.getElementById("sn").innerHTML = "Song: Peter Pan"
  }

  if (leftWristx > 150 && leftWristx < 450 && leftWristy > 125 && leftWristy < 375  );{
    song1.play();
    document.getElementById("sn").innerHTML = "Song: Harry Potter"
      }
}