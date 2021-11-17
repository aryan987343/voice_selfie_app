var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    document.getElementById("textbox").innerHTML = event.results[0][0].transcript;
    content = event.results[0][0].transcript;
    if(content == "take my selfie") {
        console.log("taking selfie")
        speak()
    }
};
function speak() {
var synth = window.speechSynthesis;

var speak_data = "taking your selfie in 5 second";

var utterThis = new SpeechSynthesisUtterance(speak_data);

synth.speak(utterThis)
Webcam.attach(camera)
setTimeout(function(){
    take_snapshot()
    save()
},5000);
}
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality:90
});

function take_snapshot() {

Webcam.snap(function(data_url) {
document.getElementById("result").innerHTML = "<img id='img_cam' src='" + data_url + "'>";

});
}

function save() {
    selfie = document.getElementById("selfie");
    image = document.getElementById("img_cam").src ;
    selfie.href = image;
    selfie.click()
}
