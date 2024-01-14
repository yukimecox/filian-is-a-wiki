var audioElement = document.querySelector(".suika-audio");
var audioDiv = document.getElementById("suika-div");

audioDiv.addEventListener("click", function() {
    if (audioElement.paused) {
        audioElement.play();
        audioDiv.style.display = "none";
    }
});
