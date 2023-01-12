const BASETHREE_URL = "https://deckofcardsapi.com/api/deck/zqnjxw7xktei/return";

fetch(BASETHREE_URL)
.then((response) => response.json())
.then((deck) => {
   cardDrawn.forEach((card)=> {
    
   })

})
// form.append(isShuffled)
.catch((error) => {

    console.log(error);
  });
