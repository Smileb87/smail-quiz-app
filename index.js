const bookmark = document.querySelector('[data-js="card-bookmark"]');
const answerButton = document.querySelector('[data-js="answer-button"]');
const answerCard = document.querySelector('[data-js="card-answer"]');
answerCard.style.display = "none";
bookmark.addEventListener("click", (event) => {
bookmark.classList.toggle("hidden");
});
answerButton.addEventListener("click", (event) => {
if (answerCard.style.display === "none") {
    answerCard.style.display = "block";
    answerButton.innerHTML = "Hide Answer";
} else {
    answerCard.style.display = "none";
    answerButton.innerHTML = "Show Answer";
}
});






