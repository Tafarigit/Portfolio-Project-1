const BASE_URL = "https://deckofcardsapi.com/api/deck/new/shuffle/deck_count=1";
console.log(BASE_URL)
fetch(BASE_URL)
  .then((response) => response.json())
  .then((deck) => {
     const mainDeck = document.querySelector("form")
     const card = mainDeck.value;

     const textInput = document.querySelector("input.usersCard")
     const cardDrawn = deck[0].cards[0].value[0].suit[0];
     const cardShown = document.createElement("p")
     p.innerText = (`Card is ${deck.cards.value} of ${deck.cards.suit}`);
     form.append(p.innerText)

     

    // console.log(deck)
    // const mainDeck = document.querySelector("main")

    // const cardsRemaining = deck.remaining
    // const remainingCards = document.createElement("p")
    // p.innertext = `Total Cards: ${cardsRemaining}`
    // mainDeck.append(remainingCards)
    // console.log(mainDeck)
    // const freshDeck = deck.deck_id
    // freshDeck.setAttribute("class", "new deck");
    // freshDeck.innerText("https://m.media-amazon.com/images71eoHO0JhUL._AC_SL1500_.jpg");
    // console.log(freshDeck);

  })
  .catch((error) => {
    // You can do what you like with the error here.
    console.log(error);
  });