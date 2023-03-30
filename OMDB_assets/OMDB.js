let baseURL = "https://www.omdbapi.com/?";
let APIkey = "apikey=6f5b68";

let OMDBDisplay = $(".OMDBDisplay");
let answers = [];
let correctAnswer;
let questionCount = 0;
let previousAnswers = [];

questionTypes = [plotQuestion, boxOfficeQuestion];

// IMDB codes for top 100 movies of 2010s
const topMovies2010s = [
  "tt1895587",
  "tt4975722",
  "tt1375666",
  "tt4912910",
  "tt2562232",
  "tt6966692",
  "tt1856101",
  "tt5580390",
  "tt2024544",
  "tt5052448",
  "tt1392190",
  "tt0435761",
  "tt3450958",
  "tt2543164",
  "tt3783958",
  "tt2582802",
  "tt1065073",
  "tt1655442",
  "tt5027774",
  "tt1790885",
  "tt5013056",
  "tt3315342",
  "tt2582782",
  "tt3498820",
  "tt2488496",
  "tt1024648",
  "tt1454468",
  "tt1285016",
  "tt1663202",
  "tt0993846",
  "tt3170832",
  "tt1853728",
  "tt1074638",
  "tt0780504",
  "tt2401878",
  "tt1431045",
  "tt1504320",
  "tt4034228",
  "tt1255953",
  "tt2431286",
  "tt3011894",
  "tt1843866",
  "tt1832382",
  "tt0848228",
  "tt3808342",
  "tt2278388",
  "tt0478304",
  "tt0947798",
  "tt2106476",
  "tt2872718",
  "tt1821549",
  "tt5275892",
  "tt0970179",
  "tt0964517",
  "tt4178092",
  "tt2015381",
  "tt0454876",
  "tt0790636",
  "tt2084970",
  "tt1605783",
  "tt1800241",
  "tt3397884",
  "tt1045658",
  "tt4846340",
  "tt1210166",
  "tt3682448",
  "tt1748122",
  "tt1340107",
  "tt2119532",
  "tt1535109",
  "tt1399683",
  "tt0443272",
  "tt1345836",
  "tt2125435",
  "tt1602620",
  "tt1798709",
  "tt1542344",
  "tt1033575",
  "tt1403865",
  "tt1318514",
  "tt2267998",
  "tt1392214",
  "tt2103281",
  "tt2948356",
  "tt2179136",
  "tt5186714",
  "tt3741834",
  "tt3841424",
  "tt3501632",
  "tt2527336",
  "tt5776858",
  "tt7775622",
  "tt4154756",
  "tt7349662",
  "tt1825683",
  "tt6644200",
  "tt5340300",
  "tt1727824",
  "tt1517451",
  "tt7476236",
  "tt6155172",
];

// selects a random movie from the array and returns it as the value
function getRandomMovie() {
  let r = Math.floor(Math.random() * topMovies2010s.length);
  let movie = topMovies2010s[r];
  return movie;
}

// first gets a random movie and ensures that it has not already been picked in this session. pushes the selected movie into the array to ensure it wont be picked
// increases the question count towards game over
// then queries the API for the selected movie, jsonisfies it, selects a random question type, and passes the data to the selected function
function queryOMDB() {
  do {
    movie = getRandomMovie();
  } while (previousAnswers.includes(movie));
  previousAnswers.push(movie);
  questionCount++;

  fetch(baseURL + APIkey + "&i=" + movie + "&plot=short")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let i = Math.floor(Math.random() * questionTypes.length);
      questionTypes[i](data);
    });
}

// functon to generate the plot based question
// creates elements, extracts values from API, appends question items to page
// pushes the correct answer to the answers array, then passes the array into the get more answers function
function plotQuestion(data) {
  let questionContainer = $("<div>");
  let promptContainer = $("<div>");
  let promptText = $("<h2>");
  promptText.text(
    "The following is the plot of which popular movie from the 2010s?:"
  );
  let plot = $("<p>");
  plot.text(data.Plot);

  let answerContainer = $("<div>");
  answerContainer.addClass("answerContainer");

  promptContainer.append(promptText, plot);
  questionContainer.append(promptContainer, answerContainer);
  OMDBDisplay.append(questionContainer);

  answers = [];
  correctAnswer = data.Title;
  answers.push(data.Title);

  getMoreAnswers(answers);
}

// function to generate the box office question
// similar functionality as above, just extracts different data
function boxOfficeQuestion(data) {
  let questionContainer = $("<div>");
  let promptContainer = $("<div>");
  let promptText = $("<h2>");
  let movieReleaseYear = data.Year;
  let movieBoxOffice = data.BoxOffice;

  promptText.text(
    "Which movie, released in " +
      movieReleaseYear +
      ", posted a box office of " +
      movieBoxOffice +
      "?"
  );

  let answerContainer = $("<div>");
  answerContainer.addClass("answerContainer");

  promptContainer.append(promptText);
  questionContainer.append(promptContainer, answerContainer);
  OMDBDisplay.append(questionContainer);

  answers = [];
  correctAnswer = data.Title;
  answers.push(data.Title);

  getMoreAnswers(answers);
}

// for loop to query API for additional movie titles to fill out remaining incorrect answers
// checks to ensure selected title is not already in the answer pool
// once answers array has 4 values, passes array to display answers function
function getMoreAnswers(answers) {
  for (let i = 0; i < 5; i++) {
    movie = getRandomMovie();
    fetch(baseURL + APIkey + "&i=" + movie + "&plot=short")
      .then((res) => res.json())
      .then((d) => {
        if (!answers.includes(d.Title)) {
          answers.push(d.Title);
        }
        if (answers.length === 4) {
          displayAnswers(answers);
        }
      });
  }
}
// pulls in passed answers array and runs through shuffle answers to mix up where the correct answer goes
// then iterates the array and creates buttons for each answer
function displayAnswers(answers) {
  answers = shuffleAnswers(answers);
  for (let i = 0; i < answers.length; i++) {
    let answerBtn = $("<button>");
    answerBtn.addClass("answerBtn");
    answerBtn.text(answers[i]);
    $(".answerContainer").append(answerBtn);
  }
}

// function that randomized the array
// shuffles values between i and j as  i descends to produce random order
function shuffleAnswers(answers) {
  for (let i = answers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = answers[i];
    answers[i] = answers[j];
    answers[j] = temp;
  }
  return answers;
}

// function to check user answer vs correct answer.
// provides response and moves to next question waypoint
function checkAnswer(userAnswer) {
  if (userAnswer === correctAnswer) {
    alert("yay, that's right");
  } else {
    alert("aww, that's wrong");
  }
  nextQuestion();
}

// waypoint to detemine how to proceed.
// if question count has been reached, ends game, otherwise pushes to next question
function nextQuestion() {
  OMDBDisplay.empty();
  if (questionCount < 10) {
    queryOMDB();
  } else {
    gameOver();
  }
}

// alerts that game is over, resets question count, resets previous answers array.
function gameOver() {
  OMDBDisplay.text("GAME OVER");
  questionCount = 0;
  previousAnswers = [];
}

// starts the game by triggering the OMDB function
$(".startGameBtn").click(() => {
  queryOMDB();
});

// event delegation on OMDB display when .answerBtn is clicked. pulls target value and passes userAnswer to checkAnswer function
$(".OMDBDisplay").on("click", ".answerBtn", (e) => {
  let userAnswer = $(e.target).text();
  checkAnswer(userAnswer);
});

//! there's a rare bug where the answer buttons are posted twice, resulting in 8 buttons. unsure why.
