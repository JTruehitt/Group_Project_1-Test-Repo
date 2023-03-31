let giphyDisplay = $(".giphyDisplay")
let searchTerm = $(".searchTerm")

let apiKey = "api_key=axJ1DtkLXB8rYsm7KvxDxCwLhNlzccGq";

let baseURL = "https://api.giphy.com/v1/gifs/search?";

let rating = "&rating=pg-13"

function queryGiphy(query) {

    fetch(baseURL + apiKey + rating + "&q=" + query)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        renderGifs(data);
    })
}


function renderGifs(data) {
giphyDisplay.empty();
let gif = $("<img>");
let gifURL = data.data[1].images.original.url;
console.log(gifURL)
gif.attr("src", gifURL);
giphyDisplay.append(gif);
}


$(".startGameBtn").click(() => {
    let query = searchTerm.val().trim().replace(" ","+");
    queryGiphy(query);
})