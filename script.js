// fetch("https://api.scryfall.com/catalog/land-types")

var searchBar = document.getElementById("search-bar");
var searchButton = document.getElementById("search");
var cardName = document.getElementById("card-name");
var cardPrice = document.getElementById("card-price");
var cardImg = document.getElementById("card-img");

function getPrice(card) {
    fetch("https://api.scryfall.com/cards/named?order=usd&unique=prints&fuzzy="+ card).then(
        function (response) {
        return response.json();
      }).then(function (data) {
        cardName.textContent = data.name;
        cardPrice.textContent = "$" + data.prices.usd;
        cardImg.setAttribute("src", data.image_uris.normal);
        cardImg.setAttribute("alt", data.name);
        console.log(data);
    });
}

searchButton.addEventListener("click", function () {
    getPrice(searchBar.value)
}

)