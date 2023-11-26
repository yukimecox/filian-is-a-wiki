function calculateAge(dateOfBirth) {
    const dob = new Date(dateOfBirth);
    const now = new Date();
    const dobYear = dob.getFullYear();
    const dobMonth = dob.getMonth();
    const dobDay = dob.getDate();
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth();
    const nowDay = now.getDate();

    let age = nowYear - dobYear;
    if (nowMonth < dobMonth || (nowMonth === dobMonth && nowDay < dobDay)) age--;
    return age;
}

const dobElement = document.getElementById("dob");
const ageElement = document.getElementById("age");
const dobText = dobElement.textContent;
const dobParts = dobText.split(" ");
const dobString = dobParts[dobParts.length - 1];

const age = calculateAge(dobString);
ageElement.textContent = age;