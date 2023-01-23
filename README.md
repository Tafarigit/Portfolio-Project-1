# Portfolio-Project-1
Link to app:

https://click-for-a-card.netlify.app/


Video presentation: 

https://us06web.zoom.us/rec/share/mLTiCbcrCB2sIKVEK_D820JqkCTWvb3QymNpkRP36Tgi5UWp60AmrWUwW0nJHGv6.SjNplyO8n5_XfDUf?startTime=1674506065000

Passcode: 0@E1S0=E

Overview and Setup:
This webpage has two html pages that are linked index.html and main.hmtl. One js file and one css file.  In order to move form one page to the other you must use the hyperlink on the page which take you to the main.html page where ypou will see a small form on the screen. 

Instruction:

The webpage will open with a HTML greeting "Keep clicking for a new card!". Below will be another statement "Always a freshly shuffled deck", this statement enlargesby 150% when the mouse hovers over the text. The hover feature is also present on the "Press here to draw a card" text as well. There is a button that says "Click Me!, next to the buton is the text "Press Here To Draw A Card! Press the click me button and a card will appear on the screen. When "Click Me!" is clicked there appears an image of a playing card along with text below the coard that gives you the value and the suit of the card.



Below that is statment of "Deck is Shuffled! Produced because of API request that was made as the page is opened and the page in turn tells you the deck is shuffled. This message goes away upon the first click of the button. At the end of 52 clicks another messsage appears declaring in the same position as the "Deck is Shuffled" text and it says "Reshuffled". Reshuffled only appears when there are no more cards left in the deck and calls to the API to shuffle again and provide 52 cards.


There is a hyperlink located below where the playing card would be displayed if the buttopn is clicked or just below the "Deck is Shuffled" text if no card is displayed. Which takes you to a page with a form that prompts you to enter your name in the bocx below.. At the top of this page is text in gold lettering that says Thanks for stopping by... Below that is "Enter Your Name in the box below". The box is an input box that has a required property on it. If it is not filled with some text before the user clicks the submit button a prompt will appear below the input box that says please fill out this field. Below all of that is Deck is Shuffled again this is a bug that I will need to fix later. After text is coreectly entered in the input box the box refreshes and the user can continue or leave the site.

CSS:

The CSS page styles both pages and inclued transitons on certain text with a hover atrribute on them. The CSS include grid and mediaqueries on certain parts of the pages. 

JS: The Js has several function that help produce the visual applications on the page. Also makes api requests and gives instructions based on the data in the api requests. 

