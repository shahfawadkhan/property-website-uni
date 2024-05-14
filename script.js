
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("searchbutton");

searchButton.addEventListener("click", function() {
    var query = searchInput.value;
    var searchMap = {
        "about"  : "#about",
        "features" :"#feature",
    };
    if (searchMap.hasOwnProperty(query)) {
        window.location.href = searchMap[query];
    } else {
        alert("Sorry, no results found for your search query.");
    }
});