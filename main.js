// const BASETHREE_URL = "https://deckofcardsapi.com/api/deck/zqnjxw7xktei/return";
// const ASETWO_URL = "https://deckofcardsapi.com/api/deck/zqnjxw7xktei/draw/?count=1";

// fetch(BASETWO_URL)
// .then((response) => response.json())
// .then((deck) => {
//     console.log(deck)
//     function cardPoints(deck) {
//         const pointsFaceCards = 10
//         const cardValuePoints = ""

//         deck.cards.pointsFaceCards = 10
//         deck.cards.cardValuePoints = deck.cards[0].value
//         //  Object.assign(deck.cards, {pointsFaceCards: 10})
//         if (deck.cards[0].value === "JACK" || deck.cards[0].value === "QUEEN" || deck.cards[0].value === "KING") {
//             // Object.assign(deck, {pointsFaceCards: 10})
//             deck.cards[0].value = Number(deck.cards.pointsFaceCards)
//         }else {
//             deck.cards[0].value = Number(deck.cards.cardValuePoints)
//         //   console.log(typeof(cardValuePoints))

//         console.log(deck.cards.pointsFaceCards)
//         // console.log(deck.cardValuePoints)
//         }
//     }
//     cardPoints(deck)
// })
// // form.append(isShuffled)
// .catch((error) => {

//     console.log(error);
//   });

//  function scoreCard (deck) {

//     fetch(BASETWO_URL)
// .then((response) => response.json())
// .then((deck) => {



//     console.log(deck)
//     let pointTotal = 0
//      cardPoints = (deck) => {
//     for (let cardValue in deck) {
//         if (cardValue[0] < cardValue[1]) {
//             pointTotal+= pointTotal + cardValue[0] + 1;
//             console.log(pointTotal)
//             // return pointTotal
            


//         }
//         console.log(scoreCard)

//     }}

//     })
//     .catch((error) => {

//         console.log(error);
//       });

  
//       return pointTotal
// //   console.log(scoreCard)
// }

/* Attempting to call the point function inside of the cardDrawn fucntion to to do the calculation of points foir the cards and return to the deck thast should be return and then shuffle the deck */


// function cardDrawn(deck, deckShuffleCheck, cardPoints) {
 
//     for (let cards in deck) {
//         if (cardPointValue[0] < cardPointValue[1]) {
//             fetch(BASETWO_URL)
//             .then((response) => response.json())
//             .then((deck) => {
//               console.log(pointsTotal)
//             if (!cards) {
//                 cardPicked.innerText = ''
//             }
            
//             else {
//                 cardPicked.innerText = `Your card is ${deck.cards[0].value} of ${deck.cards[0].suit}`
//                 // deckShuffleCheck = ""
//                 console.log(cardPicked.innerText)
//             }
            
        
        
//         })
//         .catch((error) => {
        
//             console.log(error);
//           });
//         }
    
//     }
    
//     }





// function scoreCard (deck, cardPoints) {
//     let score = ''
//     let point = 1
//     let currentScore = 0
//     // score = pointsCard[0]
//     console.log(deck)
//          for (let i = 0; i < pointsCard.length -1; i++) {
//             score = pointsCard[0]
//         //   score = pointsCard[0]
//         if (currentScore >= 0 && typeof(score) === "string") {
           
//            currentScore = score * .5
//            console.log(1, sum)
//            console.log(2, currentScore)
//         //    sum = currentScore
//             // currentScore = Number(score) + score
//             //  score = currentScore
//             console.log("scoreCard: ", score)
//         }if (currentScore >= 0 && typeof(score) === "number") {
//             //  currentScore+=  + 1
//             //  score = currentScore + 1
//             // currentScore = sum
//            score = score + point
//            currentScore = score
    
          
            
//             console.log("score:", currentScore)
             
//         }
    
//         return currentScore
//          }
//     // totalScore = currentScore + newScore
//     console.log("currentScore: ", Number(score))
//     // return currentScore 
//     // return currentScore
//     }
    


// function cardPoints(deck) {

//     // let sum =  0
//     let totalPoints = ''
//     const pointsFaceCards = 10
//     const cardValuePoints = ""
    

//     deck.cards[0].pointsFaceCards = 10
//     deck.cards[0].cardValuePoints = deck.cards[0].value
//     // console.log(Number(`${deck.cards[0].value}`))
  
//         if (!cards) {
//             cardPointValue.innerText = ''
//         }
     
//         if ((deck.cards[0].value === "JACK") || (deck.cards[0].value === "QUEEN") || (deck.cards[0].value === "KING") || (deck.cards[0].value === "ACE")) {
//            totalPoints =  Number(deck.cards[0].pointsFaceCards)
//             // totalPoints = sum
//             // pointsCard.push(totalPoints)
//             cardPointValue.innerText =  ` Your card is ${deck.cards[0].pointsFaceCards} points!`
//             // deckShuffleCheck = ""
//             // sum = sum + totalPoints[0]
//             console.log("totalPoints = " ,  totalPoints)
            
//         }               
        

//         else {
//             deck.cards[0].cardValuePoints
//            totalPoints =  Number(deck.cards[0].cardValuePoints)
//         //    totalPoints = sum
//         //    pointsCard.push(totalPoints)
//             cardPointValue.innerText =  `Your card is ${deck.cards[0].cardValuePoints} points!`
//             // sum = sum + totalPoints[0]
            
//             // console.log("totalPoints = " + `${sum})
//             console.log("totalPoints = " , totalPoints)
        
//         }
//         console.log(totalPoints)
//         console.log(pointsCard)
//         pointsCard.push(totalPoints)
//         console.log(pointsCard)
//         return totalPoints
//     //    howManyPoints(cardPoints, pointsCard)
    
//     }







// }
// console.log(howManyPoints(cardPoints, pointsCard))
// }
// console.log(howManyPoints)
// howManyPoints(cardPoints, pointsCard)

