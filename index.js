const BASE_URL = "https://deckofcardsapi.com/api/deck/zqnjxw7xktei/shuffle";
let cardPicked = document.createElement("p")
    cardPicked.setAttribute("class", "pickedCards")
// const cardDrawn = document.CreateElement("p")
// cardDrawn.setAttributes("class", "pickedCards")

fetch(BASE_URL)
.then((response) => response.json())
.then((deck) => {
    const deckShuffleCheck = document.createElement("p")
    deckShuffleCheck.setAttribute("class", "userSearch")
    
 if (deck.shuffled === true) {
   deckShuffleCheck.innerText += "Deck is Shuffled!"
 }if(deck.shuffled === false) {
   deckShuffleCheck.innerText += "Refresh the page to play again!"
   console.log(deckShuffleCheck.innerText)
 }
form.append(deckShuffleCheck)
// console.log("Deck is shuffled");
// console.log(deck.shuffled)
//  input.value = deckShuffleCheck.innerText
})

.catch((error) => {

  console.log(error);
});
const BASETWO_URL = "https://deckofcardsapi.com/api/deck/zqnjxw7xktei/draw/?count=1";
console.log(BASE_URL)
// console.log(BASETWO_URL)
const form = document.querySelector("form")
const inputName = document.querySelector("input.userSearch")
const btn = document.querySelector("#buttonClick")
console.log()
const image = document.querySelector("#cardImage")
const cards = document.createElement("p")
// cards.setAttribute("class", "drawnCards")
btn.addEventListener("click", onclick => {

    onclick.preventDefault()

    fetch(BASETWO_URL)
    .then((response) => response.json())
    .then((deck) => {
    
       
       
        // console.log(deck.cards.length)
        // let card = image.src
       image.src = deck.cards[0].image

     



    //    count += count + deck.cards.length
    //    console.log(deck.cards.length)
    //    const drawnCard = document.createElement("p")
    //    drawnCard.setAttribute("class", "cards")
    //    drawnCard.innerText = `Card is: ${deck.cards[0].code}`
    //    console.log(drawnCard)
       console.log(deck.remaining)
    //    for (let code in deck) {
    //    console.log(`deck.${code} = ${deck[code]}`)
    //     }
    //    console.log(image.src)
    cardDrawn(deck)
    shuffle(deck)
    form.append(image)
    // form.append(drawnCard)
    form.append(cardPicked)
    // cardDrawn(deck)
    // drawCard(deck)
    // shuffle(deck)
    
    // reshuffle(deck)
     form.reset()
    
    
    })
    .catch((error) => {

      console.log(error);
    });



})
function shuffle(deck) {
    // const isShuffled = document.createElement("p")
    
     if (deck.remaining === 0){
        fetch(BASE_URL)
        .then((response) => response.json())
        .then((deck) => {
            console.log("Reshuffled")
 
    })
    // form.append(isShuffled)
    .catch((error) => {

        console.log(error);
      });
}

}

function cardDrawn(deck) {

         
 
for (let cards in deck) {
if (!cards) {
    cardPicked.innerText = ''
}

else {
    cardPicked.innerText = `Your card is ${deck.cards[0].value} of ${deck.cards[0].suit}`
}
}

 
    }
// function drawCard(deck) {
//     const cardDrawn = document.createElement("p")
//     cardDrawn.innerText = image.src
//     for (let el of deck) {
//     if (deck.remaining > 1) {


//     } 
//     }
// }

//    function reshuffle(deck) {
//     // console.log(deck.cards)
//     for (let card in cards) {
//         // console.log(deck.cards[3].image)
//         if (deck.remaining === 0) {

//     fetch(BASETWO_URL)
//     .then((response) => response.json())
//     .then((deck) => {

//         console.log(deck.cards.length)
      
      
//     })
//     .catch((error) => {

//       console.log(error);
//     });
    
//     }

//    }
// }

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

    // function drawCard (deck) {
    //     let cardDrawn = ""
    //     let count = 0
    //     for (let card in deck.cards) {
    //         if (!card) {
    //             cardDrawn = 1
    //         }if (card) {
    //             cardDrawn++
    //         }
    //         console.log(deck)
    //     }
    //     return count+= cardDrawn
    // }
