// this will not be moved to askme.html for just this one example of creating a .js file.
const form = document.getElementById("form");
const commentBox = document.getElementById("comment");
const submitButton = document.getElementById("submit-button");
const resetButton = document.getElementById("reset-button");
const message = document.getElementById("message");
const indexButton = document.querySelector(".go-back");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // submit something that doesn't store anything in database

    // when submitting from form, hide contents entirely
    document.querySelector("h2").style.display = "none";
    document.querySelector("h4").style.display = "none";
    commentBox.style.display = "none";
    submitButton.style.display = "none";
    resetButton.style.display = "none";

    // show message and its contents as block for each element
    message.style.display = "block";
});

indexButton.addEventListener("click", () => { 
    window.location.href = "../index.html"; 
});