//Variables ⬇️
//______________________________________________________________________________________________________________

var savedCovers = document.querySelector(".saved-covers")


var sessionString = sessionStorage.getItem('array')
var favorites = JSON.parse(sessionString)
var homeButton = document.getElementById("home-button")

sessionStorage.setItem('array', JSON.stringify(favorites))

console.log(homeButton)
homeButton.addEventListener('click', home)

console.log("fefe")


//Other Functions
//______________________________________________________________________________________________________________

for(var i = 0; i < favorites.length; i++) {
    savedCovers.innerHTML += 
    `
    <div class="box2">
      <section class = "message-box">
      <h1>${favorites[i]}</h1>
      </section>
    </div>

    `
}

//Page Swap functions ⬇️
//______________________________________________________________________________________________________________

function home() {
        console.log("test")
        sessionStorage.setItem('array', JSON.stringify(favorites))
        window.location.href = "index.html"
}