function queryTAPI() {
  //! LocalStorage Method-----------------
  // let userSelections = JSON.parse(localStorage.getItem("userSelections"));

  // if (userSelections.categories.length === 10) {
  //   userSelections.categories = "";
  // } else  {
  //   userSelections.categories = "categories=" + userSelections.categories.join();
  // }
  // if (userSelections.difficulty == "any") {
  //   userSelections.difficulty = "";
  // }

  //! URL Method--------------------------
  let userSelections = {};
  userSelections.categories = location.search.split("?")[1];
  userSelections.number = location.search.split("?")[2];
  userSelections.difficulty = location.search.split("?")[3];
  //!-------------------------------------

  let queryURL =
    "https://the-trivia-api.com/api/questions?" +
    userSelections.categories +
    userSelections.number +
    "&region=US" +
    userSelections.difficulty;

  console.log(queryURL);
  fetch(queryURL)
    .then((res) => res.json())
    .then((data) => {
      questionBank = data;
      console.log(data);
      // renderNextQuestion(data, questionsAnswered);
    });
}

queryTAPI();
