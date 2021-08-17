Webcam.set({
    width:400,
    height:350,
    image_format: "jpg",
    jpg_quality:100
});

cam = document.getElementById("Cam");
Webcam.attach(cam);

function Capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("Cap").innerHTML = '<img id="Img" src="'+data_uri+'"/>';
    });

}
console.log("model version", ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/phgP7qjKP/model.json', modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!!!!!!");
}

function Identify(){
    img = document.getElementById("Img");
    classifier.classify(img, gotresult);
}

function gotresult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("Obj").innerHTML = results[0].label;
        document.getElementById("Acc").innerHTML = results[0].confidence.toFixed(3);
    }
}