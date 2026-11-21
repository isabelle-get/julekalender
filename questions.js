let id = Number(window.location.pathname.split("/").pop())
let question = questions.find(question => question.id === id)
let container = document.getElementById("question")
container.innerHTML = `<h2>${question.question}</h2>`


module.exports = questions