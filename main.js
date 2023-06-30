//https://teachablemachine.withgoogle.com/models/7js1f54Z-/

function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7js1f54Z-/model.json', modelReady);

}

function modelReady() {
    classifier.classify(gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.error(error)
    } else {
        console.log(result)
        R = Math.floor(Math.random() * 255) + 1;
        G = Math.floor(Math.random() * 255) + 1;
        B = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "i can hear " + result[0].label;
        document.getElementById("result_confidense").innerHTML = "Accuracy =" + (result[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + R + "," + G + "," + B + ")"
        document.getElementById("result_confidense").style.color = "rgb(" + R + "," + G + "," + B + ")"

        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img2 = document.getElementById('alien3');
        img3 = document.getElementById('alien4');

        if (result[0].label == "Clap") {
            img.src = 'aliens-01.gif';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        } else if (result[0].label == "bell") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.gif';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        } else if (result[0].label == "snap") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.gif';
            img3.src = 'aliens-04.png';
        } else if (result[0].label == "Background Noise") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.gif';
        }
    }
}