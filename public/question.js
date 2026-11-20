const id = Number(window.location.pathname.split("/").pop());
const seed = window.questions.find(question => question.id === id);
const questionElement = document.querySelector("#question h2");

if (seed) {
    questionElement.textContent = seed.question;
}
