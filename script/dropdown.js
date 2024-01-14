// this code will have the user click on the icon to make the tabs appear for mobile
const bars = document.getElementById("bars");
const leftContainer = document.querySelector(".left-container");

// the tabs appear depending on the window size upon loading, so check for that
window.addEventListener("load", () => {
    checkScreenWidth();
});

// when the user clicks on the icon will either make it appear or disappear based on restricted size
bars.addEventListener("click", () => {
    if (window.innerWidth < 825) leftContainer.classList.toggle("active");
});

// add or remove active functionality of leftContainer based on CSS code
function checkScreenWidth() {
    if (window.innerWidth >= 825) leftContainer.classList.add("active");
    else leftContainer.classList.remove("active");
};