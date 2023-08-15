// this will not be moved to askme.html for just this one example of creating a .js file.
document.getElementById("write-something").addEventListener("submit", function(event) {
    event.preventDefault(); // no data is being sent to the server (yet)

    // apply background color for the "thank you" webpage
    document.body.style.backgroundColor = "#EDD9D4";

    // show thank you message
    var container = document.querySelector(".container");   //target only child elements of parent (not descendants for querySelectorAll().)
    container.innerHTML = "<h2>Thank you, Snacker</h2>";    //append the message

    //create and append the image element
    var image = document.createElement("img");
    image.src = "../images/fillyLove.png";
    container.appendChild(image);
    var image2 = document.createElement("img");
    image2.src = "../images/fillyLove.png";
    container.appendChild(image2);
    var image3 = document.createElement("img");
    image3.src = "../images/fillyLove.png";
    container.appendChild(image3);
    var spaceImage = [image, image2, image3];           //create image array to space them apart
    for (var i = 0; i < spaceImage.length; i++) {
        spaceImage[i].style.marginRight = "25px";       // space each image apart by 25px
    }

    // create a div for the button
    var buttonDiv = document.createElement("div");
    var continueButton = document.createElement("button");
    // add text to the button
    continueButton.textContent = "Go Back";
    // on click, go back to index.html (root). this can also mean: for some user interaction, where would you go in the website.
    continueButton.addEventListener("click", function() { window.location.href = "../index.html"; });
    // append each child to their parent to ensure the button works correctly
    buttonDiv.appendChild(continueButton);
    container.appendChild(buttonDiv);
});