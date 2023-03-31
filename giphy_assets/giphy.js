let giphyDisplay = $(".giphyDisplay")
let searchTerm = $(".searchTerm")



function queryGiphy(query) {

    let apiKey = "api_key=axJ1DtkLXB8rYsm7KvxDxCwLhNlzccGq";
    let baseURL = "https://api.giphy.com/v1/gifs/search?";
    let rating = "&rating=pg-13"

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
let i = Math.floor(Math.random() * data.data.length)
let gifURL = data.data[i].images.original.url;
console.log(gifURL)
gif.attr("src", gifURL);
gif.addClass("gifIMG")
giphyDisplay.append(gif);
}

function pickQuery(result) {
    const correct = ["correct", "way+to+go", "good+job"];
    const incorrect = ["incorrect", "wrong", "nope"];
    let r = Math.floor(Math.random() * correct.length);
    if (result === 0) {
        query = correct[r];
        queryGiphy(query);
    } else {
        query = incorrect[r];
        queryGiphy(query);
    }
}




$(".startGameBtn").click(() => {
    // let query = searchTerm.val().trim().replace(" ","+");
    // queryGiphy(query);

    pickQuery(1);
})