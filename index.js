

const BASE_URL = "https://deckofcardsapi.com/api/deck/zqnjxw7xktei/draw/?count=1";
console.log(BASE_URL)
const form = document.querySelector("form")
const inputName = document.querySelector("input.usersName")
const btn = document.querySelector("#buttonClick")
console.log()
const image = document.querySelector("#cardImage")

btn.addEventListener("click", onclick => {

    onclick.preventDefault()

    fetch(BASE_URL)
    .then((response) => response.json())
    .then((deck) => {
       image.src = deck.cards[0].image
       console.log(image)
      


    shuffle(deck)
    reshuffle()
     form.reset()
    })
    .catch((error) => {

      console.log(error);
    });



})
function shuffle(deck) {
    const isShuffled = document.createElement("p")
  
    // console.log(isShuffled)       
     if (deck.shuffled === true){
     isShuffled.innerText = "Deck has been shuffled"
    }if (deck.remaining === 0) {
        isShuffled.innerText = "Would you like to shuffle the deck"
        reshuffle()
    }
    form.append(isShuffled)
 
}

// function drawCard(deck) {
//     const cardDrawn = document.createElement("p")
//     cardDrawn.innerText = image.src
//     for (let el of deck) {
//     if (deck.remaining > 1) {


//     } 
//     }
// }

   function reshuffle(deck) {
    // console.log(deck.cards)
    for (card of cards) {
        // console.log(deck.cards[3].image)
        if (indexOf(deck.card) === deck.cards.length -1)
    
        fetch("https://deckofcardsapi.com/api/deck/zqnjxw7xktei/shuffle/").then(response => {
            return response.json()
         
        })
        .catch(error => {
        console.log(error)
        })
    }

   }
  

// function cardPile () {
//     if (cardDrawn) 
// }


//    console.log(deck)
    //    console.log(deck.cards[0].image)
    //    const mainDeck = document.querySelector("form")
    //    const card = mainDeck.value;
  
    //    const textInput = document.querySelector("input.usersCard")
    //    const cardDrawn = deck[0].cards[0].value[0].suit[0];
    //    const cardShown = document.createElement("p")
    //    p.innerText = (`Card is ${deck.cards.value} of ${deck.cards.suit}`);

    
    //    form.append(p.innerText)