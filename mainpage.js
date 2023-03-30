let OTDBBtn = $(".OTDBBtn");
let triviaAPIBtn = $(".triviaAPIBtn");
let marvelBtn = $(".marvelBtn");
let OMDBBtn = $(".OMDBBtn");
let mealDBBtn = $(".mealDBBtn");

OTDBBtn.click(() => {
  location.assign("./OTDB_assets/OTDB.html");
});

triviaAPIBtn.click(() => {
  location.assign("./TriviaAPI_assets/TriviaAPI.html");
});

marvelBtn.click(() => {
  location.assign("./marvel_assets/marvel.html");
});

OMDBBtn.click(() => {
  location.assign("./OMDB_assets/OMDB.html");
});

mealDBBtn.click(() => {
  location.assign("./TheMealDB_assets/mealdb.html");
});
