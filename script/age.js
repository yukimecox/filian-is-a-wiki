const dobElement = document.getElementById("dob");
const ageElement = document.getElementById("age");
const dobText = dobElement.textContent;
const dobParts = dobText.split(" ");
const dobString = dobParts[dobParts.length - 1];
const age = calculateAge(dobString);
ageElement.textContent = age;

function calculateAge(dateOfBirth) {
    const dob = new Date(dateOfBirth);
    const now = new Date();
    let age = now.getFullYear() - dob.getFullYear();
    if (now.getMonth() < dob.getMonth() || (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())) age--;
    return age;
}
