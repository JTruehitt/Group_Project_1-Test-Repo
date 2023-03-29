// https://the-trivia-api.com/

let triviaAPIDisplay = $(".triviaAPIDisplay");
let userAnswer;
let correctAnswer;
let i = 0;
let questionBank;

function queryTAPI() {
  let baseURL = "https://the-trivia-api.com/api/questions?region=US";

  let queryURL = baseURL;
  fetch(queryURL)
    .then((res) => res.json())
    .then((data) => {
      questionBank = data;
      console.log(data);
      renderNextQuestion(data, i);
    });
}

function renderNextQuestion(data, i) {
  triviaAPIDisplay.empty();
  console.log(i);
  console.log(data.length);
  if (i == data.length) {
    return endGame();
  } else {
    let questionContainer = $("<div>");
    let question = $("<p>");
    correctAnswer = data[i].correctAnswer;
    let wrongAnswers = data[i].incorrectAnswers;
    let answerArr = [];
    for (let i = 0; i < wrongAnswers.length; i++) {
      let wrongAnsertDecoded = wrongAnswers[i];
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

    question.text(data[i].question);
    questionContainer.append(question);
    questionContainer.append(answerContainer);
    triviaAPIDisplay.append(questionContainer);
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
  triviaAPIDisplay.text("GAME OVER");
  return;
}

$(".triviaAPIDisplay").on("click", ".answerBtn", (e) => {
  let userAnswer = $(e.target).text();
  checkAnswer(userAnswer);
});

$(".startGameBtn").click(() => {
  queryTAPI();
});
