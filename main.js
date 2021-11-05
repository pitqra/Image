Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quailty:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' )
 function take_snapshot()
 {
     Webcam.snap(function(data_url) {
         document.getElementById("result").innerHTML = '<img id="captured_image" src="' +data_url+ '" />'; 
     });
 }

 console.log('ml5 version:', ml5.version);

 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3m1IMPz4_/model.json',modelLoaded);

 function modelLoaded() {
     console.log('Model Loaded!');
 }

 function check() {
     img=document.getElementById('captured_image');
     classifier.classify(img, gotResult);
 }

 function gotResult(error, results) {
     if (error) {
         console.error(error);
     }
     else {
         console.log(results);
         document.getElementById("result_object_name").innerHTML = result[0].label;
         document.getElementById("result_object_accuracy").innerHTML = result[0].confidence.toFixed(3);
         
     }
 }