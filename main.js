Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
 webcam.attach('#camera');
 function takespanshot(){
  webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML = '<img id="capturedimage" src="'+data_uri+'">';
  })
 }

 console.log(ml5.version);
 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cljNaDbhR/',modelloaded);
 
 function modelloaded(){
     console.log('modelloaded');
 }