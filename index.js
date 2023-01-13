const BASE_URL = "https://deckofcardsapi.com/api/deck/zqnjxw7xktei/shuffle";
let cardPicked = document.createElement("p")
    cardPicked.setAttribute("class", "pickedCards")
    let deckShuffleCheck = document.createElement("p")
    deckShuffleCheck.setAttribute("class", "userSearch")
    const cardPointValue = document.createElement("p")
    cardPointValue.setAttribute("class", "pointCards")
// const cardDrawn = document.CreateElement("p")
// cardDrawn.setAttributes("class", "pickedCards")

fetch(BASE_URL)
.then((response) => response.json())
.then((deck) => {

    // const deckShuffleCheck = document.createElement("p")
    // deckShuffleCheck.setAttribute("class", "userSearch")
    
 if (deck.shuffled === true) {
   deckShuffleCheck.innerText = "Deck is Shuffled!"
 }
//  if(deck.shuffled === false) {
//    deckShuffleCheck.innerText = ""
// //    console.log(deckShuffleCheck.innerText)
//  }
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
// const points = document.querySelector("p.pointCards")
// console.log()
const image = document.querySelector("#cardImage")
const cards = document.createElement("p")
// cards.setAttribute("class", "drawnCards")
btn.addEventListener("click", onclick => {

    onclick.preventDefault()

    fetch(BASETWO_URL)
    .then((response) => response.json())
    .then((deck) => {
    
        // const cardPointValue = document.createElement("p")
        // cardPointValue.setAttribute("class", "pointCards")
        // cardPointValue.innerText = `Point total is ${deck.cards.value}`
       
       
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
    cardDrawn(deck, deckShuffleCheck)
    cardPoints(deck)
    shuffle(deck)
    form.append(image)
    form.append(cardPointValue)
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

//shuffle() function keeps makes an api request that delivers a deck that is shuffled when there are no remaining cards left in the deck.
// Then via text on the screen alerts the user that the deck has been Reshuffled! Since once the user goes on the page
// There is a text prompt that alerts the user the deck has been shuffled which comes from an api request made at the loading of page.


function shuffle(deck) {
    // const isShuffled = document.createElement("p")
    
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

//cardDrawn() function alerts yhe user via text what card has 
//been drawn with the number value and the suit of the card.

function cardDrawn(deck, deckShuffleCheck) {

for (let cards in deck) {
if (!cards) {
    cardPicked.innerText = ''
}

else {
    cardPicked.innerText = `Your card is ${deck.cards[0].value} of ${deck.cards[0].suit}`
    deckShuffleCheck = ""
    console.log(cardPicked.innerText)
}
}

  }

//cardPoints() function produces the number value of all cards drawn, including face cards. 
//Face cards are given a 10 point value.


    function cardPoints(deck) {

        const pointsFaceCards = 10
        const cardValuePoints = ""
       
        deck.cards[0].pointsFaceCards = 10
        deck.cards[0].cardValuePoints = deck.cards[0].value
        console.log(Number(`${deck.cards[0].value}`))
        for (let cardValue in deck) {
            if (!cardValue) {
                cardPointValue.innerText = ''
            }
            
            if (deck.cards[0].value === "JACK" || deck.cards[0].value === "QUEEN" || deck.cards[0].value === "KING" || deck.cards[0].value === "ACE") {
                deck.cards[0].pointsFaceCards
                cardPointValue.innerText =  ` Your point total is ${deck.cards[0].pointsFaceCards}`
                // deckShuffleCheck = ""
                
            }               
            else {
                deck.cards[0].value = deck.cards.cardValuePoints
                cardPointValue.innerText =  ` Your point total is ${deck.cards[0].cardValuePoints}`
            }
    }
   
    }



    
// function drawCard(deck) {
//     const cardDrawn = document.createElement("p")

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
