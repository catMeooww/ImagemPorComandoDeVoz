var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
var TextBox = document.getElementById("textbox");

function start() {
    TextBox.innerHTML = "";
    Recognition.start();
}
Recognition.onresult = function (event) {
    console.log(event);

    var content = event.results[0][0].transcript;
    TextBox.innerHTML = content;
    console.log(content);
    if (content == "tire minha selfie") {
        console.log("tirando selfie em 5s");
        speak();
    }
}
function speak() {
    var synth = window.speechSynthesis;
    speakData = "Tirando Minha Selfie em 5 segundos";
    utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function () {
     takeSelfie();
     save();
    }, 5000);
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
});
function takeSelfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("resultado").innerHTML = '<img id="selfieImage"src="'+data_uri+'"/>';
    })
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfieImage").src;
    link.href = image;
    link.click();
}