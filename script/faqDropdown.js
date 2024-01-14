// interactions with the questions and answers when the user clicks any question
var faqQuestions = document.querySelectorAll('.faq-question');
var faqAnswers = document.querySelectorAll('.faq-answer');

// take all the questions you are interacting
faqQuestions.forEach((question, i) => {
    question.addEventListener("click", () => {
        // basically reveal the answer of any question (decides by the user if they want to close some)
        const isOpen = faqAnswers[i].classList.toggle('is-open');
        faqQuestions.forEach(content => {content.classList.remove('is-open');});
        if (isOpen) question.classList.add('is-open');
    });
});