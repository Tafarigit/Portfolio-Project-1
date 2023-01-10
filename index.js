const BASE_URL = "https://deckofcardsapi.com/api/deck/new/?format=j1"

fetch(BASE_URL)
  .then((response) => response.json())
  .then((deck_id) => {
    
    console.log(deck_id);
  })
  .catch((error) => {
    // You can do what you like with the error here.
    console.log(error);
  });