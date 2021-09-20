function setup()
{
   canvas = createCanvas(300 , 300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();

   poseNet = ml5.poseNet(video, modelready);
   poseNet.on('pose', poseLips);
}

function poseLips(result)
{
 if (result.length > 0)
 {
     console.log(result);
     console.log("Lip x position = "+result[0].pose.Lips.x);
     console.log("Lip y position = "+result[0].pose.Lips.y);
 }
}

function modelready()
{
 console.log("Ml5 Is Initialized");
}

function preload()
{
  
}

function draw()
{
  image(video, 0, 0, 300, 300);
}

function mylips()
{
    save("MyLipsishurting");
}