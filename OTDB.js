// https://opentdb.com/api_config.php

let openTriviaDisplay = $(".openTriviaDisplay");
let userAnswer;
let correctAnswer;
let i = 0;
let questionBank;

function queryOTDB() {
  let baseURL = "https://opentdb.com/api.php?amount=10";

  let encoding = "&encode=base64";

  let queryURL = baseURL + encoding;
  fetch(queryURL)
    .then((res) => res.json())
    .then((data) => {
      questionBank = data;
      console.log(data);
      renderNextQuestion(data, i);
    });
}

function renderNextQuestion(data, i) {
  openTriviaDisplay.empty();
  console.log(i);
  console.log(data.results.length);
  if (i == data.results.length) {
    return endGame();
  } else {
    let questionContainer = $("<div>");
    let question = $("<p>");
    correctAnswer = atob(data.results[i].correct_answer);
    let wrongAnswers = data.results[i].incorrect_answers;
    let answerArr = [];
    for (let i = 0; i < wrongAnswers.length; i++) {
      let wrongAnsertDecoded = atob(wrongAnswers[i]);
      answerArr.push(wrongAnsertDecoded);
    }
    answerArr.push(correctAnswer);
    let answerContainer = $("<div>");
    answerContainer.addClass("answerContainer");

    for (let i = 0; i < answerArr.length; i++) {
      let answerBtn = $("<button>");
      answerBtn.text(answerArr[i]);
      answerBtn.addClass("answerBtn");
      answerContainer.append(answerBtn);
    }
    console.log(answerArr);

    question.text(atob(data.results[i].question));
    questionContainer.append(question);
    questionContainer.append(answerContainer);
    openTriviaDisplay.append(questionContainer);
  }
}

function checkAnswer(userAnswer) {
  console.log(userAnswer);
  if (userAnswer === correctAnswer) {
    alert("yay, that's right");
  } else {
    alert("sorry, that's wrong");
  }

  i++;
  renderNextQuestion(questionBank, i);
}

function endGame() {
  openTriviaDisplay.text("GAME OVER");
  return;
}

$(".openTriviaDisplay").on("click", ".answerBtn", (e) => {
  let userAnswer = $(e.target).text();
  checkAnswer(userAnswer);
});

$(".startGameBtn").click(() => {
  queryOTDB();
})
