// const BASETHREE_URL = "https://deckofcardsapi.com/api/deck/zqnjxw7xktei/return";
BASETWO_URL = "https://deckofcardsapi.com/api/deck/zqnjxw7xktei/draw/?count=1";

fetch(BASETWO_URL)
.then((response) => response.json())
.then((deck) => {
    console.log(deck)
    function cardPoints(deck) {
        const pointsFaceCards = 10
        const cardValuePoints = ""

        deck.cards.pointsFaceCards = 10
        deck.cards.cardValuePoints = deck.cards[0].value
        //  Object.assign(deck.cards, {pointsFaceCards: 10})
        if (deck.cards[0].value === "JACK" || deck.cards[0].value === "QUEEN" || deck.cards[0].value === "KING") {
            // Object.assign(deck, {pointsFaceCards: 10})
            deck.cards[0].value = Number(deck.cards.pointsFaceCards)
        }else {
            deck.cards[0].value = Number(deck.cards.cardValuePoints)
          console.log(typeof(cardValuePoints))

        // console.log(deck.cards.pointsFaceCards)
        console.log(deck.cardValuePoints)
        }
    }
    cardPoints(deck)
})
// form.append(isShuffled)
.catch((error) => {

    console.log(error);
  });
