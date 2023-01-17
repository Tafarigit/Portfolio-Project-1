//Declaring variables for specific api calls. The first one produces a shuffled deck. Insead of a brand new deck.
//Declaring variables for created elements to add to the DOM attributing classes to those elements.
//deckShuffleCheck reports to the user on the DOm that the deck has been shuffled.
//cardPicked tells the user what card they have drawn and tells them on the DOM.


const BASE_URL = "https://deckofcardsapi.com/api/deck/zqnjxw7xktei/shuffle";
let cardPicked = document.createElement("p")
    cardPicked.setAttribute("class", "pickedCards")
    let deckShuffleCheck = document.createElement("p")
    deckShuffleCheck.setAttribute("class", "userSearch")
    let pointsCard = []

fetch(BASE_URL)
.then((response) => response.json())
.then((deck) => {
 
    
 if (deck.shuffled === true) {
   deckShuffleCheck.innerText = "Deck is Shuffled!"
 }

form.append(deckShuffleCheck)

})
.catch((error) => {
    console.log(error);

});
const BASETWO_URL = "https://deckofcardsapi.com/api/deck/zqnjxw7xktei/draw/?count=1";
console.log(BASETWO_URL)

const form = document.querySelector("form")

const btn = document.querySelector("#buttonClick")
const h3 = document.querySelector('h3')


const image = document.querySelector("#cardImage")
const cards = document.createElement("p")


console.log("Drawn Cards: ", pointsCard.push())
btn.addEventListener("click", event => {
    event.preventDefault()
    fetch(BASETWO_URL)
    .then((response) => response.json())
    .then((deck) => {
   
    image.src = deck.cards[0].image
    pointsCard.push(Number(deck.cards[0].value))

    shuffle(deck)
    form.append(image)
    form.append(cardPicked)
    cardDrawn(deck)
    form.reset()
})
.catch((error) => {
    console.log(error)
})
})



    
//cardDrawn function checks tells the user in text what card has been drawn from the deck

function cardDrawn(deck, deckShuffleCheck) {

    for (let cards in deck) {
    if (!cards) {
        cardPicked.innerText = ''
    }
     else {
        cardPicked.innerText = `Your card is ${deck.cards[0].value} of ${deck.cards[0].suit}`
        deckShuffleCheck = ""
    }
}

}






//shuffle() function keeps makes an api request that delivers a deck that is shuffled when there are no remaining cards left in the deck.
// Then via text on the screen alerts the user that the deck has been Reshuffled! Since once the user goes on the page
// There is a text prompt that alerts the user the deck has been shuffled which comes from an api request made at the loading of page.


function shuffle(deck) {
    if (deck.remaining === 0){
        fetch(BASE_URL)
        .then((response) => response.json())
        .then((deck) => {
            deckShuffleCheck.innerText = "Reshuffled"
        })
        .catch((error) => {
            console.log(error);
        });
    } else {
        deckShuffleCheck.innerText =""
    }
}


  