
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
var pageSwap 


//Checking Local storage to see if there is data from the other page
var sessionString = sessionStorage.getItem('array')
if(sessionString !== []) {
    var favorites = JSON.parse(sessionString)
} else {
    var favorites = []
}


//Event Listeners
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
