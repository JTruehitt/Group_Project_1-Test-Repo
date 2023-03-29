let OTDBBtn = $(".OTDBBtn");
let triviaAPIBtn = $(".triviaAPIBtn");
let marvelBtn = $(".marvelBtn");

OTDBBtn.click(() => {
  location.assign("./OTDB_assets/OTDB.html");
});

triviaAPIBtn.click(() => {
  location.assign("./TriviaAPI_assets/TriviaAPI.html");
});

marvelBtn.click(() => {
  location.assign("./marvel_assets/marvel.html");
});
