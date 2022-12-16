
//Variables ⬇️
//______________________________________________________________________________________________________________

var receiveClick = document.getElementsByClassName("receive-button")[0]
var affirmationRadio = document.getElementsByName("type-of-message")[0]
var mantraRadio = document.getElementsByName("type-of-message")[1]
var messageBox = document.querySelector(".message-box")
var savedCovers = document.getElementById("saved-covers-button")
var messageType
var randomInt
var newMessage
var sessionString = sessionStorage.getItem('array')

var favorites = []

if(JSON.parse(sessionString !== undefined)) {
    var favorites = JSON.parse(sessionString)
    console.log(JSON.parse(sessionString))}


affirmationRadio.addEventListener('click', affirmationButton)
mantraRadio.addEventListener('click', mantraButton)
receiveClick.addEventListener('click', receiveButton)
savedCovers.addEventListener('click', savedCoversPage)



//Page Swap functions ⬇️
//______________________________________________________________________________________________________________

function savedCoversPage() {
    sessionStorage.setItem('array', JSON.stringify(favorites))
    window.location.href = "saved-covers.html"
}

//coming back home

sessionStorage.setItem('array', JSON.stringify(favorites))

//Buttons functions ⬇️
//______________________________________________________________________________________________________________

function affirmationButton(type) {
    messageType = document.getElementsByName("type-of-message")[0].value
}

function mantraButton() {
    messageType = document.getElementsByName("type-of-message")[1].value
}

function favoriteButton() {
    if (!favorites.includes(newMessage)) {
        favorites.push(newMessage)
    } else {
        alert("You already saved this message!")
    }
}

function receiveButton() {

    if(messageType === undefined) {
        alert("A type of Message must be chosen");
        return
    }

    randomInt = getRandom(messageType)

    if(messageType === 'affirmation') {
        newMessage = affirmations[randomInt]
    } else if(messageType === 'mantra') {
        newMessage = mantras[randomInt]
    }
    messageBox.innerHTML = 
    `
    <section>
        <p class = "message-box">${newMessage}</p>
        <a id = "save-button"class="btn save">♥️ Save Message ♥️</a>
    </section>
    `   
    var saveButton = document.getElementById("save-button")
    saveButton.addEventListener('click', favoriteButton)

}

//Other Functions
//______________________________________________________________________________________________________________

function getRandom(array) {
    return Math.floor(Math.random() * array.length);
  }
