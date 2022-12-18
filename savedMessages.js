//Variables ⬇️
//______________________________________________________________________________________________________________

var savedMessages = document.querySelector(".saved-messages")


var sessionString = sessionStorage.getItem('array')
var favorites = JSON.parse(sessionString)
var homeButton = document.getElementById("home-button")

sessionStorage.setItem('array', JSON.stringify(favorites))

console.log(homeButton)
homeButton.addEventListener('click', home)


//Other Functions
//______________________________________________________________________________________________________________

for(var i = 0; i < favorites.length; i++) {
    savedMessages.innerHTML += 
    `
    <div id = "${i}" class="box2">
      <section class = "message-box">
        <h1>${favorites[i]}</h1>
      </section>
    </div>
    `
    savedMessageList = savedMessages.children;
        for (var i = 0; i < savedMessageList.length; i++) {
          savedMessageList[i].addEventListener("dblclick", deleteSavedMessage)
      }
}

function deleteSavedMessage(e) {
  var parent = e.currentTarget.parentElement
  var target = e.currentTarget
  parent.removeChild(target)
  for (var i = 0; i < favorites.length; i++) {
      var check1 = target.id
      console.log(check1)
      favorites.splice(check1, 1)
      return
    }
  }
//Page Swap functions ⬇️
//______________________________________________________________________________________________________________

function home() {
        console.log("test")
        sessionStorage.setItem('array', JSON.stringify(favorites))
        window.location.href = "index.html"
}