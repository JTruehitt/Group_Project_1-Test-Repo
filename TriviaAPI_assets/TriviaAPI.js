// https://the-trivia-api.com/

// setting global varibales
let triviaAPIDisplay = $(".triviaAPIDisplay");
let userAnswer;
let correctAnswer;
let questionsAnswered = 0;
let questionBank;
let userScore = 0;

// main function that queriestAPI for questions
// parses the user inputs to build the queryURL
// handles the response, sets data as global variable questionBank to be referenced moving forward, passes data to renderNextQuestion function along with questionsAnswered count to keep track
function queryTAPI(userSelections) {
  let categoryQuery;
  let difficultyQuery;

  if (userSelections.categories == "any") {
    categoryQuery = "";
  } else if (userSelections.categories.length >= 1)
    categoryQuery = "categories=" + userSelections.categories.join();

  if (userSelections.difficulty == "any") {
    difficultyQuery = "";
  } else {
    difficultyQuery = "&difficulty=" + userSelections.difficulty;
  }

  let baseURL =
    "https://the-trivia-api.com/api/questions?" +
    categoryQuery +
    userSelections.number +
    "&region=US" +
    difficultyQuery;

  let queryURL = baseURL;
  fetch(queryURL)
    .then((res) => res.json())
    .then((data) => {
      questionBank = data;
      console.log(data);
      renderNextQuestion(data, questionsAnswered);
    });
}

// function that renders current question to the page
// first empties the display, and if # of questions answered = length of the question array, pushes to endgame
// else, creates question containers and renders to page using questionsAnswered as index for current question
// pushed correct and incorrect answers into one array, array is then shuffled, then returned array is pushed into buttons
function renderNextQuestion(data, questionsAnswered) {
  triviaAPIDisplay.empty();

  if (questionsAnswered == data.length) {
    return endGame();
  } else {
    let questionContainer = $("<div>");
    let question = $("<p>");
    correctAnswer = data[questionsAnswered].correctAnswer;
    let wrongAnswers = data[questionsAnswered].incorrectAnswers;
    let answerArr = [];
    for (let i = 0; i < wrongAnswers.length; i++) {
      answerArr.push(wrongAnswers[i]);
    }
    answerArr.push(correctAnswer);
    answerArr = shuffleAnswers(answerArr);
    let answerContainer = $("<div>");
    answerContainer.addClass("answerContainer");

    for (let i = 0; i < answerArr.length; i++) {
      let answerBtn = $("<button>");
      answerBtn.text(answerArr[i]);
      answerBtn.addClass("answerBtn");
      answerContainer.append(answerBtn);
    }

    question.text(data[questionsAnswered].question);
    questionContainer.append(question);
    questionContainer.append(answerContainer);
    triviaAPIDisplay.append(questionContainer);
  }
}

// function that shuffles answers so the correct answer is not always the last one
// sets i and j to different indexes of the array and swaps them over several iterations to ensure randomness of answer positions
function shuffleAnswers(answers) {
  for (let i = answers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let swap = answers[i];
    answers[i] = answers[j];
    answers[j] = swap;
  }
  return answers;
}

// function checks if passed user answer equals the current correct answer
// adjusts score as needed
// increases questionsAnswered number and passes back to render next question to determine how to proceed
function checkAnswer(userAnswer) {
  if (userAnswer === correctAnswer) {
    //! Replace this alert with something
    alert("yay, that's right");
    // userScore += //need to figure out scoring mechanic
  } else {
    //! Replace this alert with something
    alert("sorry, that's wrong");
    // userScore -= //need to figure out scoring mechanic
  }

  questionsAnswered++;
  renderNextQuestion(questionBank, questionsAnswered);
}

// function that triggers end game and redirects to next screen
function endGame() {
  //! will need to sort this out and configure functionality once endgame page is made
  triviaAPIDisplay.text("GAME OVER");
  // localStorage.setItem("userScore", userScore)
  // location.assign("endgame.html")
  return;
}

// event delegation for the main display that will trigger on click of an answerBtn, take the text of the target, and pass it to the checkAnswer function
$(".triviaAPIDisplay").on("click", ".answerBtn", (e) => {
  let userAnswer = $(e.target).text();
  checkAnswer(userAnswer);
});

// event listener for start game function that collects user input and passes it to the inital query function
$(".startGameBtn").click(() => {
  let categories = [];
  $("input[type=checkbox]:checked").each(function () {
    categories.push($(this).val());
  });
  let difficulty = $("#difficulty").val();

  //  let number = "&limit=" + $("#number").val();

  let number = "&limit=5";

  let userSelections = { categories, difficulty, number };

  queryTAPI(userSelections);
});
