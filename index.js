const BASE_URL = "https://deckofcardsapi.com/api/deck/zqnjxw7xktei/shuffle";
let cardPicked = document.createElement("p")
    cardPicked.setAttribute("class", "pickedCards")
    let deckShuffleCheck = document.createElement("p")
    deckShuffleCheck.setAttribute("class", "userSearch")
    const cardPointValue = document.createElement("p")
    cardPointValue.setAttribute("class", "pointCards")
    const scored = document.createElement("p")
    scored.setAttribute("class", "totalscore") 
    let pointSCard = []


fetch(BASE_URL)
.then((response) => response.json())
.then((deck) => {
    // console.log(deck)

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
console.log(BASETWO_URL)
// console.log(BASETWO_URL)
const form = document.querySelector("form")
const inputName = document.querySelector("input.userSearch")
const btn = document.querySelector("#buttonClick")
const h3 = document.querySelector('h3')
// const points = document.querySelector("p.pointCards")

const image = document.querySelector("#cardImage")
const cards = document.createElement("p")
// cards.setAttribute("class", "drawnCards")
let pointsCard = []  
console.log("Drawn Cards: ", pointsCard.push())
btn.addEventListener("click", onclick => {

    onclick.preventDefault()

    fetch(BASETWO_URL)
    .then((response) => response.json())
    .then((deck) => {
    console.log(deck)
        // const cardPointValue = document.createElement("p")
        // cardPointValue.setAttribute("class", "pointCards")
        // cardPointValue.innerText = `Point total is ${deck.cards.value}`
       
       
        // console.log(deck.cards.length)
        // let card = image.src
       image.src = deck.cards[0].image
   
       console.log(deck.remaining)
       //    for (let code in deck) {


        let codeValue = Object.values(deck.cards[0].code)
        console.log("success: ", codeValue)
        // console.log(Object.values(deck.cards[0].code))
        pointsCard.push(Number(deck.cards[0].value))




    // cardPoints(codeValue)
    // addingPointsToCards(deck)

    scoreCard()
    shuffle(deck)
    form.append(image)
    form.append(scored)
    // console.log(cardPointValue)
    form.append(cardPointValue)
    // form.append(drawnCard)
    form.append(cardPicked)
    h3.prepend(scored)
    cardDrawn(deck)
  
    // shuffle(deck)

        







    
    // reshuffle(deck)
     form.reset()








    
    
    })
    .catch((error) => {

      console.log(error);
    });

})


function scoreCard (deck, cardPoints) {
    let score = ''
    let point = 1
    let currentScore = 0
    // score = pointsCard[0]
    console.log(deck)
         for (let el of pointsCard) {
            score = Number(pointsCard[0])
        //   score = pointsCard[0]
        if (typeof(score) !== "string") {
           
           currentScore = score * 1
           console.log(1, Number(currentScore))
           console.log(2, Number(currentScore))
        //    sum = currentScore
            // currentScore = Number(score) + score
            //  score = currentScore
            console.log("scoreCard: ", score)
        }if (Number(currentScore) >= 0 && typeof(score) === "number") {
            //  currentScore+=  + 1
            //  score = currentScore + 1
            // currentScore = sum
           score = Number(score) + point
           currentScore = Number(currentScore) + 1
    
          
            
            console.log("score:", Number(currentScore))
             
        }
    pointsCard.push(Number(currentScore))
        return currentScore
         }
    // totalScore = currentScore + newScore
    console.log("keepingscore: ", Number(score) )
    console.log("currentScore: ", Number(currentScore))
    // return currentScore 
    // return currentScore
    }
    


function cardDrawn(deck, deckShuffleCheck) {

    for (let cards in deck) {
    if (!cards) {
        cardPicked.innerText = ''
        
      
    }
    
    else {
        cardPicked.innerText = `Your card is ${deck.cards[0].value} of ${deck.cards[0].suit}`
    
        deckShuffleCheck = ""
        // console.log(cardPicked.innerText)
    }
    // console.log(pointsCard)
    
    
      }
    }






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

// function cardDrawn(deck, deckShuffleCheck) {

// for (let cards in deck) {
// if (!cards) {
//     cardPicked.innerText = ''
    
  
// }

// else {
//     cardPicked.innerText = `Your card is ${deck.cards[0].value} of ${deck.cards[0].suit}`

//     deckShuffleCheck = ""
//     // console.log(cardPicked.innerText)
// }
// // console.log(pointsCard)


//   }
// }








   function reshuffle(deck) {
    // console.log(deck.cards)
    for (let card in cards) {
        // console.log(deck.cards[3].image)
        if (deck.remaining === 0) {

    fetch(BASETWO_URL)
    .then((response) => response.json())
    .then((deck) => {

        console.log(deck.cards.length)
      
      
    })
    .catch((error) => {

      console.log(error);
    });
    
    }

   }
}


  function cardCollector(array) {
    let count = 0
for (let card of array) {
    if(!card) {
        count = 1


    }else {
     count++
    }
}
  }