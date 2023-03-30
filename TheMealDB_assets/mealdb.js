let mealDBDisplay = $(".mealDBDisplay");

let baseURL = "https://www.themealdb.com/api/json/v1/1/random.php";
let answers = [];
let correctAnswer;
let previousAnswers = [];

function queryMealDB() {
  fetch(baseURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayMeal(data);
    });
}

function displayMeal(data) {
  let mealCard = $("<div>");
  let mealIMGContainer = $("<div>");
  let mealTextContainer = $("<div>");
  // let mealTitle = $("<p>");
  // let mealArea = $("<p>");
  let mealPrompt = $("<h2>");

  let mealTitle = data.meals[0].strMeal;

  // mealTitle.text(data.meals[0].strMeal);
  // mealArea.text(data.meals[0].strArea);
  mealPrompt.text("Which of the following images depicts " + mealTitle + "?");

  answers = [];

  let mealIMGURL = data.meals[0].strMealThumb;
  correctAnswer = mealIMGURL;
  answers.push(mealIMGURL);

  mealCard.addClass("mealCard");
  mealIMGContainer.addClass("mealIMGContainer");

  // mealTextContainer.append(mealTitle, mealArea);
  mealCard.append(mealPrompt, mealTextContainer, mealIMGContainer);
  mealDBDisplay.append(mealCard);

  getMoreAnswers(answers);
}

function getMoreAnswers(answers) {
  for (let i = 0; i < 5; i++) {
    fetch(baseURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!answers.includes(data.meals[0].strMealThumb)) {
          answers.push(data.meals[0].strMealThumb);
        }
        if (answers.length === 4) {
          displayAnswers(answers);
        }
      });
  }
}

function displayAnswers(answers) {
  for (let i = 0; i < answers.length; i++) {
    let answerIMG = $("<img>");
    answerIMG.addClass("mealIMG");
    answerIMG.attr("src", answers[i]);
    $(".mealIMGContainer").append(answerIMG);
  }
}

function checkAnswer(userAnswer) {
  if (userAnswer === correctAnswer) {
    alert("yay, you got it");
  } else {
    alert("nope,that's not it");
  }
}

$(".startGameBtn").click(() => {
  queryMealDB();
});

mealDBDisplay.on("click", ".mealIMG", (e) => {
  let userAnswer = $(e.target).attr("src");
  checkAnswer(userAnswer);
});
